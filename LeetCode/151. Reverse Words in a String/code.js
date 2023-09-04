var s = "the sky is blue";

var result = [];
let temp = '';
var is_letter = false;

for(let i = 0 ; i < s.length ; i++){
    if(s[i] != ' '){
        var is_letter = true;
        temp = temp.concat(s[i]);
    }
    if(s[i]==' ' && is_letter){
        result.unshift(temp);
        temp = '';
        is_letter = false;
    }
}
if(temp.length > 0)
    result.unshift(temp);

return result.join(' ');