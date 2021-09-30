function addAndSubtract(num1, num2, num3) {
    function sum(first, second) {
        return Number(first) + Number(second);
    }
    function subtract(first, third) {
        return first - Number(third);
    }
    let sumCalc = sum(num1, num2);
    let subCalc = subtract(sumCalc, num3);
    console.log(subCalc);
}