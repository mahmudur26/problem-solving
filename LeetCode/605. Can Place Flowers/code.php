<?php
$flowerbed = [1,0,0,0,1];
$n = 1;

$count = 0;
$flowerbedLength = count($flowerbed);
for ($i = 0; $i <= $flowerbedLength; $i++) {
    if ($flowerbed[$i] == 0 &&
        $i < $flowerbedLength) {
        $count++;
        if ($i == 0) $count++;
        if ($i == $flowerbedLength - 1) $count++;
    } else {
        $n -= intdiv($count - 1, 2);
        if ($n <= 0) return true;
        $count = 0;
    }
}
return false;