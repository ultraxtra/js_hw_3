let array = ["Pyton", "C++", "C#", "PHP"];
let name = "Java Script";

const hasName = array.includes(name);

if(hasName){
    console.log("Ok");
}else{
    console.log("Java Script is not in this array, we will add it");
    array.push("Java Script");
    
    for(const names of array){
        console.log(names);
    }
}