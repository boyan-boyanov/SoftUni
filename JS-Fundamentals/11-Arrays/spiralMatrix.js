function spiralMatrix(row, coll) {
    let matrix = new Array(coll);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(row)
    }
    let maxNumber = row * coll
    let counter = 1;
    let move = "right";
    let r = 0;
    let c = 0;
    let rotation = 0;

    for (let i = 0; ; i++) {
        if (counter > maxNumber) {
            break;
        }
        switch (move) {
            case "right":
                if (move === "right" && c < coll - rotation) {
                    matrix[r][c] = counter
                    counter++
                    c++

                    continue;
                } else {
                    move = "down"
                    c--;
                    r++
                }
                break;

            case "down":
                if (move === "down" && r < row - rotation) {
                    matrix[r][c] = counter
                    counter++
                    r++

                    continue;
                } else {
                    move = 'left'
                    r--
                    c--
                }
                break;

            case "left":
                if (move === "left" && c >= 0 + rotation) {
                    matrix[r][c] = counter
                    counter++
                    c--

                    continue;
                } else {
                    move = "up"
                    rotation += 1;
                    c++
                    r--
                }
                break;

            case "up":
                if (move === "up" && r >= 0 + rotation) {
                    matrix[r][c] = counter
                    counter++
                    r--

                    continue;
                } else {
                    move = "right"
                    r++
                    c++
                }
                break;
        }
    }

    console.log(matrix.map(rim => rim.join(" ")).join("\n"));
}

spiralMatrix(7, 12);