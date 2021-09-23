function primeNumberChecker(num) {
    result = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false; break;
        }
    }
    console.log(result);
}