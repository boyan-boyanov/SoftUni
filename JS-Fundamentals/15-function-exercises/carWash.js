function carWash(command) {
    let car = 0;

    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'soap':
                car += 10
                break;
            case "water":
                car *= 1.2;
                break;
            case "vacuum cleaner":
                car *= 1.25;
                break;
            case "mud":
                car *= 0.9;
                break;
        }
    }
    console.log(`The car is ${car.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);