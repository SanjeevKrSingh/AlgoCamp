let arr = [1, 1, 0, 1, 1, 0, 1, 1];


let i = 0, j = 1;

while(j < arr.length) {
    if(arr[i] == 1 && arr[j] === 1) {
        j++;
    }else if(arr[i] == 1 && arr[j] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j++;
    }else if(arr[i] == 0 && arr[j] == 1) {
        i++;
        j++;
    }else {
        i++;
        j++;
    }
}

console.log(arr);
