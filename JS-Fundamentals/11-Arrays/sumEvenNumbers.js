function sumEvenNumbers(array) {
    let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (Number(array[i]) % 2 === 0) {
    //         sum += Number(array[i])
    //     }
    //  }
    // console.log(sum);
    for (let i of array) {
        if (i % 2 === 0) {
            sum += Number(i)
        }
    }
    console.log(sum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);

