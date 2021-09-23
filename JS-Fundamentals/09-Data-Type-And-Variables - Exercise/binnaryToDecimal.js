function binaryToDecimal(binary) {
    let split = binary.split("")
    let result = 0;
    for (let i = 0; i < split.length; i++) {
        if (split[i] === "1") {
            result += Math.pow(2, split.length - 1 - i)
        }
    }

    console.log(result);
}