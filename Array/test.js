// different ways to initiate an Array
console.log("Different way to initiate array.")
let new_array = new Array(1, 2, 3, 4, 5);
let new_array_2 = new Array(5);
let new_array_3 = new Array();
let normal_array = [1, 2, 3, 4, 5];
new_array_3.length = 5;
console.log(`${new_array}\n${new_array_2}\n${new_array_3}\n${normal_array}`);

console.log("\n------------- Array operation ---------------");
let arr = ["a","b","c","d","e"];
arr.splice(0,3,"ab","cc");
console.log(`Splice and replace: ${arr}`);

// JS array doesn't have append function for specific index,
//  we can use splice(start, deleteCount=0, ...)
// to act as append function in Python.
let arr_1 = [1, 2, 3, 4, 5];
arr_1.splice(4, 0, 4.5, 4.6, 4.7, 4.8, 4.9);
console.log(`Splice as append: ${arr_1}`);

let arr_1_plus = arr_1.filter(item => item>=4);
console.log(`arr_1_plus: ${arr_1_plus}`);

// for slice, it doesn't copy the element in end index.
let arr_2 = ["a", "b", "c", "d", "e", "f"];
console.log(`Slice: ${arr_2.slice(1, 3)}`);
// return [1, 2]

// forEach loop.
arr_2.forEach(function(element, index, array){
    console.log(`${element} is the ${index} index in array ${array}`);
})


// Array insert.
console.log("\nArray insert function.")
array_test = [1,2,3];
console.log(`Original: ${array_test}`);

function array_insert(array_, index, value){
    // array_: an array want to insert some value at index = index.
    // index: where to insert
    // value: what value to insert.
    for(let i=array_.length; i>index; i--){
        array_[i] = array_[i-1]
    }
    array_[index] = value;
    return array_
}
// Insert with js function.
function array_insert_2(array_, index, value){
    array_.splice(index, 0 , value);
    return array_;
}
console.log(array_insert(array_test, 1 , 0.2));
console.log(array_insert_2(array_test, 0, 0));

// Array.prototype.reduce function, reduce all list to a single value.
function test_reduce(reduce_array, initialValue=0){
    return reduce_array.reduce((previousValue, currentValue)=> previousValue+currentValue, initialValue)
}
console.log("------test ------ reduce-----")
console.log(test_reduce([10,20,33],100))

// js array is extendable.
example = [1,2,3]
console.log(example[4])