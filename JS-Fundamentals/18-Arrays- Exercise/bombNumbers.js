function bombNumbers(array, bomb) {
    let detonateIn = array.findIndex(x => x === bomb[0])
    while (detonateIn !== -1) {       

            if (detonateIn !== -1) {
                let start = detonateIn - bomb[1];
                if (start >= 0) {
                    array.splice(detonateIn - bomb[1], 2 * bomb[1] + 1)
                } else {
                    array.splice(0, Math.abs(start) + 1 + bomb[1])
                }
            }        
        detonateIn = array.findIndex(x => x === bomb[0])
    }
    if (array.length >0) {
        console.log(array.reduce((a,b)=> a+b));
    }else {
        console.log(`0`);
    }
}

bombNumbers([2, 7, 7, 1, 2, 3],
    [7, 8]       
);