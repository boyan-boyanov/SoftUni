function rounding(num, pres) {
    if (pres > 15) {
        pres = 15
    }
    let result = parseFloat(num.toFixed(pres))
    console.log(result);
}

rounding(3.1415926535897932384626433832795,2)