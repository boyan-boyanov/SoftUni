function specialNumber(n) {

    for (let i = 1; i <= n; i++) {
        let number = Number(i)
        let num = i.toString()
        let sum = 0;
        for (let k = 0; k < num.length; k++) {
            sum += number % 10
            number = Math.floor(number / 10)
        }
        if (sum === 11 || sum === 5 || sum === 7) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`)
        }



    }
}

specialNumber(15);