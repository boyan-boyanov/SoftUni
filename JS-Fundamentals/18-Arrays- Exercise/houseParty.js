function houseParty(array) {
    let final = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(" ");
        let name = current.shift();
        let command = current.join(" ")
        let index = final.findIndex(x => x === name);

        if (command === "is going!") {
            if (index === -1) {
                final.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (index !== -1) {
                final.splice(index, 1);
            }else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(final.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);