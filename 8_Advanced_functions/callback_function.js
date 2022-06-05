function callback_fn(words){
    console.log(`Hello ${words}`);
}
function callback_fn_2(words){
    console.log(`Hey ${words}`);
}

function call(callback){
    let x = "world";
    callback(x);
}

console.log("--- 1 ---")
call(callback_fn);
console.log("--- 2 ---")
call(callback_fn_2);