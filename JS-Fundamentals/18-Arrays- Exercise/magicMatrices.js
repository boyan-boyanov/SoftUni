function magicMatrices(array) {
    let flag = true;
    let sum = eval(array[0].join("+"))

    for (let i = 0; i < array.length; i++) {
        if (sum !== eval(array[i].join("+"))) {
            flag = false;
            break;
        }
    }
    
    for (let k = 0; k < array.length; k++) {
        let sum2 = 0;
        let index = 0
        let current = array[index];
        for (let j = 0; j < array.length; j++) {
            sum2 += Number(current[k])
            index++
            current = array[index]
        }
        if (sum !== sum2) {
            flag = false;
            break;           
        }
    }    
    console.log(flag);  
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);