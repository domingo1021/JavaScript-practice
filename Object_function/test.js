console.log("-------new Obeject------")
let car = new Object({
    id: 12121213131313,
    nation: "Taitan",
    brand: "Hello world",
});
car.shape = "Big car"
console.log(typeof car);
console.log(car)


console.log("---------json object------------")
// Directly json object
let id = Symbol("id");
let car_2 = {
    shape : "Big car",
    shape: "Bigggggggg",
    "hello" : "world",
    id: 12345,
}
console.log(car_2.shape)
console.log(Object.keys(car_2));

let teacher = {
    "name":"Domingo",
    "students":["a","b","c","d",],
    // Original definition of function
    sayHi_0: function(){
        console.log(`Hello world 0`)
    },
    // Simplified function
    sayHi_1(){
        console.log(`Hello world_1~ My name is ${this.name}`);
    },
    // Arrow function, added since ES6.
    sayHi_2: () =>{
      console.log(`hello world_2`);  
    },
    studentsHI(){
        let msg="";
        this.students.forEach(function(student){
            msg += `Teacher ${this.name} say hello to ${student}, Good morning!\n`;
        }.bind(this))
        console.log(msg);
    },
}
console.log("------- Single say hi ! ----------");
teacher.sayHi_0();
teacher.sayHi_1();
teacher.sayHi_2();
console.log("-------- for all student, hi !----------");
teacher.studentsHI();

console.log("------To print out all key and value-------")
console.log("First answer");
let classmates=[
    {"id":1, "name":"AAA"},
    {"id":2, "name":"BBB"},
    {"id":3, "name":"CCC"},
]
// First Answer
classmates.forEach(function(classmate){
    for(let key of Object.keys(classmate)){
        console.log(`${key}: ${classmate[key]}`);
    }
})
console.log("Second answer");
// Second Answer (faster)
classmates.forEach(function(classmate){
    for(let [key, value] of Object.entries(classmate)){
        console.log(`${key}: ${value}`);
    }
})
// Third Answer, directly print variable "classmate"
console.log(classmates);