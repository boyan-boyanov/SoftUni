function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let num = Math.floor(sum)
    if (sum === num) {
        console.log(`${sum} - Integer`);

    } else { console.log(`${sum} - Float`); }
}

integerAndFloat(9, 100, 1.1);