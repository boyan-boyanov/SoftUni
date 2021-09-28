function signCheck(numOne, numTwo, numThree) {
    let result = "";

    if ((numOne >= 0 && numTwo >= 0) || (numOne < 0 && numTwo < 0)) {
        if (numThree > 0) {
            result = "Positive"
        } else {
            result = "Negative"
        }
    } else {
        if (numThree > 0) {
            result = "Negative"
        } else {
            result = "Positive"
        }
    }
    console.log(result);
}