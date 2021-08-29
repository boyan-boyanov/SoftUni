function fuelMoney(distance, people, price) {
    let consum = distance / 100 * 7;
    let gas = consum + people * 0.1
    let money = gas * price;
    console.log(`Needed money for that trip is ${money} lv`);
}

fuelMoney(260, 9, 2.49);