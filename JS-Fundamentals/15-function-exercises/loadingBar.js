function loadingBar(num) {
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {

        let result = `${num}% [`
        for (let i = 0; i < num; i += 10) {
            result += "%"
        }
        for (let k = 0; k < 100 - num; k += 10) {
            result += "."

        }
        result += "]"
        console.log(result);
        console.log(`Still loading...`);
    }
}