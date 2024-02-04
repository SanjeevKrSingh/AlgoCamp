let str = "sanjeev";
let obj = {};

for(const key of str) {
    if(!obj[key]) {
        obj[key] = 1;
    }else {
        obj[key] = obj[key] + 1;
    }
}
console.log("🚀 ~ obj:", obj)