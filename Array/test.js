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
