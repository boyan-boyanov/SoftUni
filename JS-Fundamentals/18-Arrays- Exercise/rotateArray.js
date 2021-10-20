function rotateArray(array) {
    let step = Number(array[array.length - 1])
    array.pop();

    for (let i = 0; i < step; i++) {
        array.unshift(array[array.length - 1])
        array.pop()
    }
    console.log(array.join(" "));
}