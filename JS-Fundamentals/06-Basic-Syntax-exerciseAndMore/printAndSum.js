function printAndSum(start, end) {
    let sum = 0;
    let num = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        num += i + " ";
    }
    console.log(num);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)