function palindromeIntegers(array) {
    let firstNum = 0;
    let seconNum = 0;
    for (let number of array) {
        firstNum = number
        secondNum = number.toString().split("").reverse().join("")
        if (firstNum === Number(secondNum)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }

}