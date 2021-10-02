function factorialDivision(num1, num2) {
    let factorialNum1 = firstCalc(num1);
    let factorialNum2 = secondCalc(num2);

    function firstCalc(number) {
        number = Number(number);
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i
        }
        return result;
    }
    function secondCalc(number) {
        number = Number(number);
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i
        }
        return result;
    }
    let result = (factorialNum1 / factorialNum2).toFixed(2);
    return result;
}