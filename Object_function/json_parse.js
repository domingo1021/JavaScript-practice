let a = "['鋼鐵人', '嘿嘿嘿', '嘻嘻嘻']";
const split_array = a.split(",");
a_2 = []
for(let i=0; i<split_array.length; i++){
    tem_string = split_array[i];
    if (i!=split_array.length-1){
        tem_string = tem_string.substring(2,tem_string.length-1);
    }else{
        tem_string = tem_string.substring(2,tem_string.length-2);
    }
    a_2.push(tem_string);
}
console.log(a_2)