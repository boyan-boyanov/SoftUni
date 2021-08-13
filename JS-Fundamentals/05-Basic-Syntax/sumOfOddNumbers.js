function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n * 2; i += 2) {
        if (i % 2 !== 0) {
            sum += i;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);