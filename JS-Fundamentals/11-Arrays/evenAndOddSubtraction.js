function evenAndOddSubtraction(array) {
    let sum = 0;

    for (let i of array) {
        if (i % 2 === 0) {
            sum += Number(i)
        } else {
            sum -= Number(i)
        }
    }
    console.log(sum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);