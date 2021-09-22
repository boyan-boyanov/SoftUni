function gladiatorExprenses(lost, helm, sword, shield, armor) {
    let sum = 0;

    for (let i = 1; i <= lost; i++) {
        if (i % 2 === 0) {
            sum += helm;
        }
        if (i % 3 === 0) {
            sum += sword;
        }
        if (i % 6 === 0) {
            sum += shield;
        }
        if (i % 12 === 0) {
            sum += armor;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}