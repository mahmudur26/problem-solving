var word = 'AACMAACXY';
let pattern = 'AAC';

var z = [];
z[0] = 'X';

let pattern_length = pattern.length;
let new_word = pattern.concat('#').concat(word);

for(let i = 1 ; i < new_word.length ; i++){
    let count_i = i;
    let count = 0;
    while(new_word[count_i] == pattern[count]){
        count++;
        count_i++;
    }
    z.push(count);
}

console.log(z);