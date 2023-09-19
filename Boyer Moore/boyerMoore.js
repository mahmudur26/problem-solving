// BAD CHARACTER

class BoyerMoore {
    constructor(pattern) {
      this.pattern = pattern;
      this.patternLength = pattern.length;
      this.badCharacter = this.calculateBadCharacter();
    }
  
    calculateBadCharacter() {
      const badCharacter = new Array(256).fill(-1);
      for (let i = 0; i < this.patternLength; i++) {
        badCharacter[this.pattern.charCodeAt(i)] = i;
      }
      return badCharacter;
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
          console.log(shift);
          shift += (shift + patternLength < textLength)
            ? patternLength - this.badCharacter[text.charCodeAt(shift + patternLength)]
            : 1;
        } else {
          shift += Math.max(1, j - this.badCharacter[text.charCodeAt(shift + j)]);
        }
      }
    }
  }
  
  // Example usage:
  const pattern = "AAC";
  const text = "AACMNAAXAAC";
  const bm = new BoyerMoore(pattern);
  bm.searchPattern(text);
  