// let nums = [0,1,0,3,12];
let nums = [0];

let left_pointer = 0;
let right_pointer = 1;

while(right_pointer !== (nums.length)){
    if(nums[left_pointer] == 0){
        if(nums[right_pointer]==0){
            right_pointer++;
        }else{
            nums[left_pointer] = nums[right_pointer];
            nums[right_pointer] = 0;
            left_pointer++;
            right_pointer++;
        }
    }
    else{
        left_pointer++;
        right_pointer++;
    }
}
console.log(nums);