function englishNameLastDigit(arr) {
    let digit = arr % 10
    if (digit === 0) {
        console.log(`zero`);
    } else if (digit === 1) {
        console.log(`one`);
    } else if (digit === 2) {
        console.log(`two`);
    } else if (digit === 3) {
        console.log(`three`);
    } else if (digit === 4) {
        console.log(`four`);
    } else if (digit === 5) {
        console.log(`five`);
    } else if (digit === 6) {
        console.log(`six`);
    } else if (digit === 7) {
        console.log(`seven`);
    } else if (digit === 8) {
        console.log(`eight`);
    } else if (digit === 9) {
        console.log(`nine`);
    }

}

englishNameLastDigit(512)

