function getZarr(string) {
  const n = string.length;
  const z = new Array(n).fill('X');
  let l = 0, r = 0, k = 0;

  for (let i = 1; i < n; i++) {
    if (i > r) {
      l = i;
      r = i;
      while (r < n && string[r - 1] === string[r]) {
        r++;
      }
      z[i] = r - l;
      r--;
    } else {
      k = i - l;
      if (z[k] < r - i + 1) {
        z[i] = z[k];
      } else {
        l = i;
        while (r < n && string[r - 1] === string[r]) {
          r++;
        }
        z[i] = r - l;
        r--;
      }
    }
  }
  return z;
}

var word = 'AACMAACXY';
let pattern = 'AAC';

var z = [];
z[0] = 'X';

let pattern_length = pattern.length;
let new_word = pattern.concat('#').concat(word);

// Example usage:
const zArray = getZarr(new_word);
console.log(zArray);

