function searchForANumber(array, keyNums) {
    let newArr = array.slice(0, keyNums[0])
    newArr.splice(0, keyNums[1])
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === keyNums[2]) {
            count++
        }
    }

    console.log(`Number ${keyNums[2]} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);