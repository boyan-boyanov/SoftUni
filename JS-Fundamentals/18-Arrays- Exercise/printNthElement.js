function printNthElements(array) {
    let step = Number(array[array.length - 1])
    let result = "";
    for (let i = 0; i < array.length - 1; i +=step) {
        result += array[i] + " "
    }
    console.log(result);
}