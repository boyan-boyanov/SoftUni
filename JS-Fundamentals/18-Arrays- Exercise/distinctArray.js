function distinctArray(array) {
    let length = array.length
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < length; k++) {
            if (array[i] === array[k]) {
                array.splice(k, 1);
                k--
            }
        }
    }
    console.log(array.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 4, 4]);