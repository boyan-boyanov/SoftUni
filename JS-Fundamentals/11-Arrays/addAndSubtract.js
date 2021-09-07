function addAndSubtract(array) {
    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = 0
        if (array[i] % 2 === 0) {
            currentNum = Number(array[i]) + i;
        } else {
            currentNum = Number(array[i]) - i;
        }
        newArray.push(currentNum);
        sumArray += Number(array[i]);
        sumNewArray += currentNum
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);
}

addAndSubtract([-5, 11, 3, 0, 2]);