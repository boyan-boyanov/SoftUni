function listOfProduct(array) {
    let list = array.sort()

    for (let i = 1; i <= list.length; i++) {
        console.log(`${i}.${list[i - 1]}`);
    }
}