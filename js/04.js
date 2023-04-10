const array = ["1-Pyton", "2-C++", "3-C#","4-PHP"];

const result = array.map(item => item.split("-")[1]);
console.log(array);
console.log("Result: ", result);