let car_map = new Map();

car_map.set("Benz", 1000000);
car_map.set("BMW", 20);
car_map.set("Tesla", 30000000000);
car_map.set(12345, 54321)

console.log(car_map)
console.log(`The value of "BMW" in car_map: ${car_map.get("BMW")}`);
console.log(`Car_list size: ${car_map.size}`);

for(let[key, value] of car_map){
    console.log(`key: ${key}, value: ${value}`);
}
console.log("\n----------- Map to Object --------------");
// Map to Object
let car_object = Object.fromEntries(car_map.entries());
console.log(`Type of car_object: ${typeof car_object}`);
console.log(car_object);

// Object to Map
console.log("\n----------- Object to Map --------------");
let car_map_2 = new Map(Object.entries(car_object));
// Map is still a kind of object
console.log(`Type of car_map_2: ${typeof car_map_2}`);
console.log(car_map_2);

// Set
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// set only add unique value.
set.add(john);
set.add(pete);
set.add(mary);
// add duplicated value will be ingored.
set.add(john);
set.add(mary);
console.log("\n----------- Set --------------");
console.log(set);