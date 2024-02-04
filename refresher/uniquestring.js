const arr = ["abc", "def", "ghi", "def", "abc"];

let ans = [];
for(const val of arr) {
    if(!ans.includes(val))
     ans.push(val);
}

console.log(ans);