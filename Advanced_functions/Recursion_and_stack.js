let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

// Recursively calculate sum answer.
function sum_salaries(c){
    let sum = 0;
    if(Array.isArray(c)){
        return c.reduce((pre,curr)=>pre+curr.salary, 0);
    }else{
        for(let element of Object.values(c)){
            sum += sum_salaries(element);
        }
    }
    return sum; 
}
console.log(sum_salaries(company));
console.log(`Correct Answer: ${1000+1600+2000+1800+1300}`);