function amazingNumbers(num) {
    num = num.toString()
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString()
    let output = false;
    for (let k = 0; k < result.length; k++) {
        if (result[k] === "9") {
            output = true
        }
    }
    console.log(output 
        ? `${num} Amazing? True` 
        : `${num} Amazing? False`);
}

amazingNumbers(9992);