const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let sum1 = 0;
let sum2 = 0;
let total = 0;

for(const nums1 of array1){
    sum1+=nums1;
}

for(const nums2 of array2){
    sum2+=nums2;
}

total = sum1 + sum2;

console.log(`Total sum of 2 array is: ${total}`);