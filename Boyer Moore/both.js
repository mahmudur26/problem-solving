class BoyerMooreCombined {
  constructor(pattern) {
    this.pattern = pattern;
    this.patternLength = pattern.length;
    this.badCharacter = this.calculateBadCharacter();
    this.goodSuffix = this.calculateGoodSuffix();
  }

  calculateBadCharacter() {
    const badCharacter = new Array(256).fill(this.patternLength);

    for (let i = 0; i < this.patternLength - 1; i++) {
      badCharacter[this.pattern.charCodeAt(i)] = this.patternLength - 1 - i;
    }

    return badCharacter;
  }

  calculateGoodSuffix() {
    const goodSuffix = new Array(this.patternLength).fill(this.patternLength);
    let lastPrefixPosition = this.patternLength;

    for (let i = this.patternLength - 1; i >= 0; i--) {
      if (this.isPrefix(i + 1)) {
        lastPrefixPosition = i + 1;
      }

      goodSuffix[i] = lastPrefixPosition - i + this.patternLength - 1;
    }

    for (let i = 0; i < this.patternLength - 1; i++) {
      const j = this.patternLength - 1 - this.getSuffixLength(i);
      if (j < this.patternLength) {
        goodSuffix[j] = this.patternLength - 1 - i + lastPrefixPosition;
      }
    }

    return goodSuffix;
  }

  isPrefix(p) {
    for (let i = p, j = 0; i < this.patternLength; i++, j++) {
      if (this.pattern[i] !== this.pattern[j]) {
        return false;
      }
    }
    return true;
  }

  getSuffixLength(i) {
    let len = 0;
    let j = i;

    while (j >= 0 && this.pattern[i] === this.pattern[j]) {
      len++;
      j--;
      i--;
    }

    return len;
  }

  searchPattern(text) {
    const patternLength = this.patternLength;
    const textLength = text.length;
    let shift = 0;
    let occurrences = [];

    while (shift <= textLength - patternLength) {
      let j = patternLength - 1;

      while (j >= 0 && this.pattern[j] === text[shift + j]) {
        j--;
      }

      if (j < 0) {
        occurrences.push(shift);
        shift += this.goodSuffix[0];
      } else {
        const badCharSkip = this.badCharacter[text.charCodeAt(shift + j)];
        const goodSuffixSkip = this.goodSuffix[j];

        shift += Math.max(1, Math.max(badCharSkip, goodSuffixSkip));
      }
    }

    return occurrences;
  }
}

// Example usage:
const pattern = "AAC";
const text = "AACMNAAXAAC";
const bmCombined = new BoyerMooreCombined(pattern);
const occurrences = bmCombined.searchPattern(text);

if (occurrences.length > 0) {
  console.log(`Pattern found at indices: ${occurrences.join(', ')}`);
} else {
  console.log("Pattern not found");
}
