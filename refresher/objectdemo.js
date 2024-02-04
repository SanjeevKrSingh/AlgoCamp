
const mySym = Symbol('key1');

const user = {
    name: 'Sanjeev',
    phone: '+916205363035',
    [mySym]: "myKey1",
    email: 'sanjeev@gmail.com',
    age: 18,
    location: 'Japan',
    isLoggedIn: false
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[mySym]);
// console.log(user);

// //Get all the keys from the object
// console.log(Object.keys(user));

// //Get all the values from the object
// console.log(Object.values(user));

// //Get all the entries of both keys and values
// console.log(Object.entries(user));


//assign a new key to the object

// 1st approach

// user.role = 'admin';
// console.log(user);

//2nd approach

// Object.assign(user, {role: 'admin'});
// console.log(user);

