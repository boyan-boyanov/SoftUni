function pointsValidation(points) {
    let x1 = points[0];
    let y1 = points[1];
    let x2 = points[2];
    let y2 = points[3]

    let case1 = firstCase(x1, y1, x2, y2);
    let case2 = secondCase(x1, y1, x2, y2);
    let case3 = thirdCase(x1, y1, x2, y2);

    function firstCase(x1, y1, x2, y2) {
        let side1 = Math.abs(x1 - x2);
        let side2 = Math.abs(y1 - y2);

        let distance = Math.sqrt(side1 * side1 + side2 * side2)
        if (distance === Math.round(distance)) {
            return true;
        } else {
            return false
        }
    }
    function secondCase(x1, y1, x2, y2) {
        let side1 = Math.abs(x1 - 0);
        let side2 = Math.abs(y1 - 0);

        let distance = Math.sqrt(side1 * side1 + side2 * side2)
        if (distance === Math.round(distance)) {
            return true;
        } else {
            return false
        }
    }
    function thirdCase(x1, y1, x2, y2) {
        let side1 = Math.abs(0 - x2);
        let side2 = Math.abs(0 - y2);

        let distance = Math.sqrt(side1 * side1 + side2 * side2)
        if (distance === Math.round(distance)) {
            return true;
        } else {
            return false
        }
    }

    if (case2) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (case3) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }


    if (case1) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([2, 1, 1, 1]);