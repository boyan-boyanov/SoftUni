function mathPower(n, x) {
    let calc = 1;
    for (let i = 0; i < x; i++) {
        calc *= n        
    }
    return calc;
}