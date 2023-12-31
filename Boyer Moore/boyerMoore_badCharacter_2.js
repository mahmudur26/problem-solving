let NO_OF_CHARS = 256;
function max (a,b){
    return (a > b)? a: b;
}
 
function badCharHeuristic(str,size,badchar){
    console.log(str[2].charCodeAt(0));
      for (let i = 0; i < NO_OF_CHARS; i++)
           badchar[i] = -1;
  
      // Fill the actual value of last occurrence
      // of a character (indices of table are ascii and values are index of occurrence)
      for (i = 0; i < size; i++)
           badchar[str[i].charCodeAt(0)] = i;
}
 
/* A pattern searching function that uses Bad
     Character Heuristic of Boyer Moore Algorithm */
function search(txt,pat)
{
    let m = pat.length;
      let n = txt.length;
  
      let badchar = new Array(NO_OF_CHARS);
  
      /* Fill the bad character array by calling
         the preprocessing function badCharHeuristic()
         for given pattern */
      badCharHeuristic(pat, m, badchar);
  
      let s = 0;  // s is shift of the pattern with
                  // respect to text
       // there are n-m+1 potential alignments
      while(s <= (n - m))
      {
          let j = m-1;
  
          /* Keep reducing index j of pattern while
             characters of pattern and text are
             matching at this shift s */
          while(j >= 0 && pat[j] == txt[s+j])
              j--;
  
          /* If the pattern is present at current
             shift, then index j will become -1 after
             the above loop */
          if (j < 0)
          {
              console.log(s);
  
              /* Shift the pattern so that the next
                 character in text aligns with the last
                 occurrence of it in pattern.
                 The condition s+m < n is necessary for
                 the case when pattern occurs at the end
                 of text */
              //txt[s+m] is character after the pattern in text
              s += (s+m < n)? m-badchar[txt[s+m].charCodeAt(0)] : 1;
  
          }
  
          else
              /* Shift the pattern so that the bad character
                 in text aligns with the last occurrence of
                 it in pattern. The max function is used to
                 make sure that we get a positive shift.
                 We may get a negative shift if the last
                 occurrence  of bad character in pattern
                 is on the right side of the current
                 character. */
              s += max(1, j - badchar[txt[s+j].charCodeAt(0)]);
      }
}
 
/* Driver program to test above function */
let txt="ABAAABCDABC".split("");
let pat = "ABC".split("");
search(txt, pat);
 
// This code is contributed by unknown2108