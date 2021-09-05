function revarseAnArrayOfNumbers(n, array) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i])
    }
    newArray = newArray.reverse().join(" ")
    console.log(newArray);
}

revarseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
revarseAnArrayOfNumbers(4, [-1, 20, 99, 5]);