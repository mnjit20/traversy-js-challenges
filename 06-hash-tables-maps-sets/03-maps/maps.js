const nameMap = new Map([
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Joe'],
]);

//get values
console.log(nameMap.values());
//get keys
console.log(nameMap.keys());


nameMap.forEach((i, index) => {
    console.log(i, index);
})

//Check
console.log(nameMap.has(2));

// Get value

console.log(nameMap.get(1));

// Delete

console.log(nameMap.delete(1));

console.log(nameMap);