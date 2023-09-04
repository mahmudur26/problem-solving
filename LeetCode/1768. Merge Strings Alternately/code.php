<?php

$word1 = "abc";
$word2 = "pqr";

$final = '';
$count = 0;
$length = 0;
if(strlen($word1) < strlen($word2)){
    $length = strlen($word1);
}else{
    $length = strlen($word2);
}

for($i = 0 ; $i < $length ; $i++){
    $final[$count] = $word1[$i];
    $count++;
    $final[$count] = $word2[$i];
    $count++;
}

if(strlen($word1) < strlen($word2)){
    $final = $final.substr($word2 , $length);
}else{
    $final = $final.substr($word1 , $length);
}

echo $final; //a p b q c r