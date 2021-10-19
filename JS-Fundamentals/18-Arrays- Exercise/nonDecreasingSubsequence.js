function nonDecreasingSubsequence(roll) {
    let result = [];
    let num = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < roll.length; i++) {
        if (Number(roll[i]) >= num) {
            result.push(roll[i]);
            num = Number(roll[i])
        }
    }
    console.log(result.join(" "));
}