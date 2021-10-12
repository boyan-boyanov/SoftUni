function processOddPosition(array) {
    let newArr = array.filter((x, i) => i % 2 !== 0).reverse().map(x => x*2)

    console.log(newArr.join(" "));
}