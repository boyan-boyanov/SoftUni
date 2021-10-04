function numberModificator(num) {
    let test = num.toString().split("")
    
    while (test !== 0) {
        num = test
    
    let count = countNumbers(num);

    function countNumbers(array) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum++            
        }
        return sum
    }
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);        
    }
    
    if (sum / count > 5) {
        console.log(num.join(""));
        break;               
    }else {
        test.push(9);
    }

}


}

numberModificator(1000);