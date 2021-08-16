function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let k = 1; k <= i; k++) {
            result += i + " ";
        }
        console.log(result);
    }
}

triangleOfNumbers(5)