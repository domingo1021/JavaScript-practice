// For loop
console.log("Normal for loop")
for(let i=0; i<5; i++){
    console.log(i)  // expect to print i=0~4;
}

console.log("-------for each -------------");
// normal function
array_ = [1, 2, 3, 4, 5, 6, 7, 8];
array_.forEach(function(element,index) {
    element += 1;
    array_[index] = element;
});
// arrow function
array_.forEach((element,index)=>{
    element+= 100;
    array_[index] = element;
})
console.log(array_)


console.log("----------do while--------")
// do while loop, 
// which will do the operation at first, 
// then check for condition in while();
let index = 0;
do{
    console.log(`Hello ${index} !`);
    index +=1;
}while(index<0);

console.log("-----------while------------")

// while loop
let condition = 0;
while (condition <5){
    console.log(`number of condition: ${condition}`);
    condition+=1;
}

console.log("----------for .. in ...------------")
// for(.. in object)
let student = {
    id: 12345,
    name: "John",
    favorite_color: ["yellow","red","blue"],
}
for(let key in student){
    console.log(`Key-value in student object --> ${key}: ${student[key]}`);
}

console.log("----------for .. of ...------------")
// only for iterable key-value 
for(let element of student.favorite_color){
    console.log(`Element in iterable variable: ${element} `)
}
