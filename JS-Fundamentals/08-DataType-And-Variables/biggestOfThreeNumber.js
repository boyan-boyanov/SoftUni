function biggestOf3Numbers(num1, num2, num3) {
    let result = Number.MIN_SAFE_INTEGER;
    if (num1 > result) {
        result = num1;
    }
    if (num2 > result) {
        result = num2;
    }
    if (num3 > result) {
        result = num3;
    }


    console.log(result);
}