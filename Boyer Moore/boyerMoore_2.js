// GOOD SUFFIX

class BoyerMoore {
  constructor(pattern) {
    this.pattern = pattern;
    this.patternLength = pattern.length;
    this.badCharacter = this.calculateBadCharacter();
    this.goodSuffix = this.calculateGoodSuffix();
  }

  calculateBadCharacter() {
    const badCharacter = new Array(256).fill(-1);
    for (let i = 0; i < this.patternLength; i++) {
      badCharacter[this.pattern.charCodeAt(i)] = i;
    }
    return badCharacter;
  }

  calculateGoodSuffix() {
    const goodSuffix = new Array(this.patternLength + 1).fill(0);
    let i = this.patternLength;
    let j = this.patternLength + 1;
    goodSuffix[i] = j;
    while (i > 0) {
      while (j <= this.patternLength && this.pattern[i - 1] !== this.pattern[j - 1]) {
        if (!goodSuffix[j]) {
          goodSuffix[j] = j - i;
        }
        j = goodSuffix[j];
      }
      i--;
      j--;
      goodSuffix[i] = j;
    }
    j = goodSuffix[0];
    for (i = 0; i <= this.patternLength; i++) {
      if (!goodSuffix[i]) {
        goodSuffix[i] = j;
      }
      if (i === j) {
        j = goodSuffix[j];
      }
    }
    return goodSuffix;
  }

  searchPattern(text) {
    const patternLength = this.patternLength;
    const textLength = text.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
      let j = patternLength - 1;
      while (j >= 0 && this.pattern[j] === text[shift + j]) {
        j--;
      }

      if (j < 0) {
        console.log(`Pattern found at position: ${shift}`);
        shift += this.goodSuffix[0];
      } else {
        const badCharShift = j - this.badCharacter[text.charCodeAt(shift + j)];
        const goodSuffixShift = this.goodSuffix[j + 1];
        shift += Math.max(badCharShift, goodSuffixShift);
      }
    }
  }
}

// Example usage:
const pattern = "example";
const text = "This is an example text. Here's an example sentence.";
const bm = new BoyerMoore(pattern);
bm.searchPattern(text);
