let student = {
    id : 1234,
    name : 'domingo',
    age : 22,
    class_mate : [
        {
            id:1222,
            name:"Mary",
            age:23,
        },
        {
            id:1333,
            name:"John",
            age:22,
        },
    ],
    scorce : {
        chinese:100,
        math:60,
    },
    sayHi(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
// Will only transfrom Object, Array, Primitive types into String-json formate
console.log(`----String----: ${typeof JSON.stringify(student)}`);
console.log(JSON.stringify(student));
// After parse to object, we also miss the attribute of function defined in variable student.
let object_student = JSON.parse(JSON.stringify(student));
console.log(`\n----Object----\nType: ${typeof object_student}\n`);
console.log(object_student);

// Problem:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let object_str = JSON.parse(str);
console.log(`Type of date after parse: ${typeof object_str.date}`); //get string
console.log(object_str);
// function in JSON.parse will """iterate""" from first key to the end,
// return Date(value) to the key which is "date".
let object_date = JSON.parse(str, function(key, value){
    if(key=="date"){
        return new Date(value);
    }else{
        return value;
    }
})
console.log(`Type of date after parse: ${typeof object_date.date}`);
console.log(object_date);

