function Car(id, name, nation){
    this.id = id;
    this.name = name;
    this.nation = nation;
    this.age = 0;
}

function test_function(){
    console.log("hello world")
}

const test = "test";

//讓其他 file 可以使用 這些 module
module.exports={Car, test_function, test};