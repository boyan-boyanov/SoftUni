function arrayManipulator(array, commands) {
    let index = 0;
    let command = commands[index]
    while (command !== "print") {
        command = commands[index].split(" ")
        switch (command[0]) {
            case "add":
                array.splice(command[1], 0, Number(command[2]));
                break;
            case "addMany":
                command.shift();
                let index = command.shift();
                array.splice(index, 0, ...command)
                break;
            case "contains":
                let find = array.findIndex(x => x === Number(command[1]))
                console.log(find);
                break;
            case "shift":
                for (let k = 0; k < command[1]; k++) {
                    array.push(array[0])
                    array.shift();
                }
                break;
            case "sumPairs":
                if (array.length % 2 !== 0) {
                    array.push(0);
                }
                let newArr = [];
                for (let j = 0; j < array.length; j += 2) {
                    let sum = Number(array[j]) + Number(array[j + 1])
                    newArr.push(sum);
                }
                array = newArr
                break;
            case "remove":
                array.splice(command[1], 1)
                break;
        }
        index++
        command = commands[index]
    }
    console.log(`[ ${array.join(", ")} ]`);
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);