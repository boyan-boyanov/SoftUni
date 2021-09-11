function maxNumber(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        let flag = true
        for (let k = i+1; k < array.length; k++) {
            if (num <= array[k]) {
                flag = false
            }
        }
        if (flag) {
            result += num + " "

        }
    }
    console.log(result);

}

maxNumber([14, 24, 3, 19, 15, 17]);