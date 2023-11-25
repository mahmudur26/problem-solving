function boyerMooreSearch(text, pattern) {
    function calculateBadCharacterTable(pattern) {
      const badCharTable = {};
      const patternLength = pattern.length;
  
      for (let i = 0; i < patternLength - 1; i++) {
        badCharTable[pattern[i]] = patternLength - 1 - i;
      }
      
      return badCharTable;
    }
  
    function calculateGoodSuffixTable(pattern) {
      const patternLength = pattern.length;
      const suffixes = new Array(patternLength);
      const goodSuffixTable = new Array(patternLength).fill(patternLength);
  
      for (let i = patternLength - 1; i >= 0; i--) {
        suffixes[i] = findSuffixLength(pattern, i);
      }
  
      for (let i = 0; i < patternLength - 1; i++) {
        const j = patternLength - 1 - suffixes[i];
        if (j < patternLength) {
          goodSuffixTable[j] = patternLength - 1 - i;
        }
      }
  
      return goodSuffixTable;
    }
  
    function findSuffixLength(pattern, i) {
      let len = 0;
      let j = i - 1;
  
      while (j >= 0 && pattern[i] === pattern[j]) {
        len++;
        j--;
        i--;
      }
  
      return len;
    }
  
    function boyerMoore() {
      const badCharTable = calculateBadCharacterTable(pattern);
      const goodSuffixTable = calculateGoodSuffixTable(pattern);
  
      const patternLength = pattern.length;
      const textLength = text.length;
  
      let occurrences = [];
  
      let i = patternLength - 1;
  
      while (i < textLength) {
        let j = patternLength - 1;
        let k = i;
  
        while (j >= 0 && text[k] === pattern[j]) {
          k--;
          j--;
        }
  
        if (j < 0) {
          occurrences.push(k + 1);
  
          // Move to the next possible occurrence
          i += goodSuffixTable[0];
        } else {
          const badCharSkip = badCharTable[text[i]] || patternLength;
          const goodSuffixSkip = goodSuffixTable[j];
  
          i += Math.max(badCharSkip, goodSuffixSkip);
        }
      }
  
      return occurrences;
    }
  
    return boyerMoore();
  }
  
  // Example usage:
  const pattern = "AAC";
  const text = "AACMNAAXAAC";
  const result = boyerMooreSearch(text, pattern);
  
  if (result.length > 0) {
    console.log(`Pattern found at indices: ${result.join(', ')}`);
  } else {
    console.log("Pattern not found");
  }
  