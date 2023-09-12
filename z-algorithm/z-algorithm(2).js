var word = 'AACMAACXY';
let pattern = 'AAC';
//AACAACMAACXY
let string = pattern.concat('#').concat(word);

const string_length = string.length;
const z = new Array(string_length).fill(0);
let left = 0, right = 0, key = 0;

for (let i = 1; i < string_length; i++) {
  if (i > right) {
    left = i;
    right = i;
    while (right < string_length && string[right - 1] === string[right]) {
      right++;
    }
    z[i] = right - left;
    right--;
  } else {
    key = i - left;
    if (z[key] < right - i + 1) {
      z[i] = z[key];
    } else {
      left = i;
      while (right < string_length && string[right - 1] === string[right]) {
        right++;
      }
      z[i] = right - left;
      right--;
    }
  }
}
console.log(z);
