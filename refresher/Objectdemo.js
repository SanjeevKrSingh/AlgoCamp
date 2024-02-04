let x = {
    name: "sanjeev",
    age: 24
}

let y = {
    name: "sanjeev",
    age: 25
}

console.log(x["name"]);
console.log(x.name);

//Are objects mutable?

y.name = "new name";
console.log(y);

//add new properties
y['marks'] = 24;
y.section = 'A';
console.log(y);

//delete a key value pair

delete y.section;
console.log(y);