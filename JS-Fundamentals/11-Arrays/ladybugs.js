function ladybugs(array) {
    let fieldLength = Number(array[0])
    let field = [];
    for (let i = 0; i < fieldLength; i++) {
        field.push(0)
    }
    let bugsPosition = [array[1]]
    bugsPosition = bugsPosition[0].split(" ")
    for (let k = 0; k < bugsPosition.length; k++) {
        let position = bugsPosition[k]
        if (position < fieldLength && position >= 0) {
            field[position] = 1;
        }
    }
    let command = [];
    for (let j = 2; j < array.length; j++) {
        command.push(array[j])
    }
    command = command.join(" ").split(" ")
    for (let m = 0; m < command.length; m += 3) {
        let position = Number(command[m])
        let move = command[m + 1]
        let step = Number(command[m + 2])
        if (field[position] === 1) {
            let newPos = 0
            field[position] = 0;
            if (move === "right") {
                newPos = position + step
            } else if (move === "left") {
                newPos = position - step
            }
            while (newPos >= 0 && newPos < fieldLength) {
                if (field[newPos] === 0) {
                    field[newPos] = 1;
                    break;
                } else {
                    if (move === "right") {
                        newPos = newPos + step
                    } else if (move === "left") {
                        newPos = newPos - step
                    }
                }
            }
        }
    }

    console.log(field.join(" "));

}

ladybugs([7, '3 1 -7', '3 left 2', '1 left -2', '4 left 1', '6 right -3', '3 left -3', '0 right -1', '-1 right 2']);