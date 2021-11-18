function towns(array) {
    let cityObj = [];
    for (const citys of array) {
        let current = citys.split(" | ");
        let currentObj = {
            town: current[0],
            latitude: Number(current[1]).toFixed(2),
            longitude: Number(current[2]).toFixed(2),
        }
        console.log(currentObj)
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)