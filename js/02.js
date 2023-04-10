const array = [23,1,45,87,4,55,6];
let maxNum = array[0];
for(const nums of array){
    if(nums > maxNum){
        maxNum = nums;
    }
}
console.log(maxNum);