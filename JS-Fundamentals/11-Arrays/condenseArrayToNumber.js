function condenseArrayToNumber(array) {
    let newArr = [];
    while (array.length - 1 > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            newArr.push(Number(array[i]) + Number(array[i + 1]))
        }
        array = newArr;
        newArr = [];
    }
    console.log(array[0]);
}

condenseArrayToNumber([2,10,3]);