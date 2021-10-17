function gladiatorInventory(game) {
    let peter = game.shift().split(" ");

    for (let i = 0; i < game.length; i++) {
        let command = game[i].split(" ");
        let index = -1
        switch (command[0]) {
            case "Buy":
                index = peter.findIndex(x => x === command[1])
                if (index === -1) {
                    peter.push(command[1]);
                }
                break;
            case "Trash":
                index = peter.findIndex(x => x === command[1])
                if (index !== -1) {
                    peter.splice(index, 1);
                }
            case "Repair":
                index = peter.findIndex(x => x === command[1])
                if (index !== -1) {
                    peter.push(command[1]);
                    peter.splice(index, 1)
                }
                break;
            case "Upgrade":
                let upgradeItem = command[1].split("-")
                index = peter.findIndex(x => x === upgradeItem[0])
                if (index !== -1) {
                    let newItem = `${upgradeItem[0]}:${upgradeItem[1]}`
                    let index2 = peter.findIndex(x => x === newItem)
                    if (index2 === -1) {
                        peter.splice(index + 1, 0, newItem)
                    }
                }

                break;
        }

    }
    console.log(peter.join(" "));
}

gladiatorInventory(['SWORD Bow Neshto',
    'Repair Bow'
]

);