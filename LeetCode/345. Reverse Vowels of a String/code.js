var s = "leetcode";
var output = "";
let vowels = [];
for(let i = 0 ; i<s.length ; i++){
    if(s[i]=='a' || 
    s[i]=='A' || 
    s[i]=='e' || 
    s[i]=='E' || 
    s[i]=='i' || 
    s[i]=='I' || 
    s[i]=='o' || 
    s[i]=='O' || 
    s[i]=='u' ||
    s[i]=='U'){
        vowels.push(s[i]);
    }
}
let n = vowels.length-1;
console.log("N: "+n);
for(let i = 0 ; i<s.length ; i++){
    if(s[i]=='a' || 
    s[i]=='A' || 
    s[i]=='e' || 
    s[i]=='E' || 
    s[i]=='i' || 
    s[i]=='I' || 
    s[i]=='o' || 
    s[i]=='O' || 
    s[i]=='u' ||
    s[i]=='U'){
        output = output+vowels[n];
        n--;
    }else{
        output = output+s[i];
    }
}

console.log(output);