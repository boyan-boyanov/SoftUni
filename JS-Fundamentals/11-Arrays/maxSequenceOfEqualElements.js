function maxSequenceOfEqualElements(array) {
    let result = [];
    let num = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < array.length; i++) {
        let count = 0
        let newArr = [];
        for (let k = i; k < array.length; k++) {
            if (array[i] === array[k]) {
                count++
                newArr.push(array[i])
            } else {
                break;
            }
        }
        if (count > num) {
            result = newArr
            num = count;
        }
    }
    console.log(result.join(" "));
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);