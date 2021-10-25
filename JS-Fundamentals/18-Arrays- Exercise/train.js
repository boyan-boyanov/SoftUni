function train(trainWagon) {
    let wagon = trainWagon.shift().split(" ").map(Number);
    let maxPeople = Number(trainWagon.shift());

    for (let i = 0; i < trainWagon.length; i++) {
        let current = trainWagon[i].split(" ")
        if (current[0] === "Add") {
            wagon.push(Number(current[1]))
        } else {
            for (let k = 0; k < wagon.length; k++) {
                let maxSpace = wagon[k] + Number(current[0])
                if (maxSpace <= maxPeople) {
                    wagon[k] = wagon[k] + Number(current[0])
                    break;
                }
            }
        }
    }
    console.log(wagon.join(" "));
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

);