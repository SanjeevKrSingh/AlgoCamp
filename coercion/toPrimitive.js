let obj = {};
console.log(obj.toString());
obj = {
    toString() {
        return "Overridden Value"
    }
}
console.log(obj.toString());
obj = {}
console.log(obj.valueOf());

obj = {
    valueOf() {
        return "sss Value";
    }
}
console.log(obj.valueOf());