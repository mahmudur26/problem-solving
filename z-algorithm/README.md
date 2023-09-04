#Z-Algorithm

```
word as string
pattern as string
concate new_word as pattern then special character then word
define z array and set 0 position as 'x'

run for loop for each value from position 1
    set count_i as loop count
    set count as 0

    while count_i position value of new_word matches with count value of pattern
        increment count
        increment count_i
    end loop

    push count in z array
end loop

```

##Complexity: O(n^2)