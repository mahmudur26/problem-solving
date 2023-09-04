var nums = [-1,1,0,-3,3];
var result = [];

for(let i = 0 ; i < nums.length ; i++){
    let temp = 1;
    for(let j = 0 ; j < nums.length ; j++){
        if(i!=j){
            temp = temp * nums[j];
        }
    }
    result.push(temp);
    console.log("Temp -> "+ temp);
}

console.log(result);