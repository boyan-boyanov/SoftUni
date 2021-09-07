function arrayRotation(array, num) {
    for (let i = 0; i < num; i++) {
        let element = array[0];
        array.push(element)
        array.shift()
    }
    console.log(array.join(" "));

}

arrayRotation([2, 4, 15, 31], 5);