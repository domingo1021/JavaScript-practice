let x = [1,2,3,4,5,6];
x.forEach(element => {
    console.log(element);
    
});
console.log("xxxx")
x.forEach(function(element, index){
    console.log(`index:${index} = ${element}`);
})
x.forEach(function(element, index, array_){
    console.log(array_);
})