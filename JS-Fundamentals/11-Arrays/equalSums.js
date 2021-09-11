function equalSums(array) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        let leftSide = 0;
        let rightSide = 0;
        for (let k = i + 1; k < array.length; k++) {
            rightSide += Number(array[k]);
        }
        for (let j = i - 1; j >= 0; j--) {
            leftSide += Number(array[j]);
        }

        if (leftSide === rightSide) {
            console.log(i);
            flag = true;
            break;
        }
    }
    if (!flag) {
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);