let nums = [0,1,0,3,12];
// let nums = [0];
let array = [];
let position = 0;
for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] !== 0){
        array[position] = nums[i];
        position++;
    }
}
for(let i = position ; i < nums.length ; i++){
    array[i] = 0;
}

console.log(array);