let x = {
    name: 'Sanjeev',
    company: 'MVP',
    salary: '100000',
    age: 24,
    city: "Bangalore",
    team: 'Bloom App',
    designation: 'Software Engineer'
};

const createKeyInX = Object.create(x);
for (let key in createKeyInX) {
    console.log(key + ": llllllllll " + createKeyInX[key]);
}
console.log(createKeyInX, x);

console.log(x);
//Get all the keys of x
let keysOfX = Object.keys(x);
console.log(keysOfX);
//Get all the values of x
let valuesOfX = Object.values(x);
console.log(valuesOfX);
// Get all the entries of x along with their key and values
let entriesOfX = Object.entries(x);
console.log(entriesOfX);