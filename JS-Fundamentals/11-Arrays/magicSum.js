function magicSum(array, num) {
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            let sum = array[i] + array[k];
            if (sum === num) {
                console.log(`${array[i]} ${array[k]}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],
    6
    );