function oddAndEvenSum(num) {
    let numbers = num.toString().split("")
    let sumEven = 0;
    let sumOdd = 0;
    for (let number of numbers) {
        if (Number(number) % 2 === 0) {
            sumEven += Number(number);
        } else {
            sumOdd += Number(number);
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
}