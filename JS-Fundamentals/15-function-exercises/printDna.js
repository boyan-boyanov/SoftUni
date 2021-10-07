function printDna(num) {
    let d1 = ["A", "T"]
    let d2 = ["C", "G"]
    let d3 = ["T", "T"]
    let d4 = ["A", "G"]
    let d5 = ["G", "G"]
    let firstCount = 1;
    let secondCount = 1;

    for (let i = 1; i <= num; i++) {
        let result = "";
        let letters = [];
        if (firstCount === 1) {
            letters = d1
        } else if (firstCount === 2) {
            letters = d2
        } else if (firstCount === 3) {
            letters = d3
        } else if (firstCount === 4) {
            letters = d4
        } else if (firstCount === 5) {
            letters = d5
        }

        switch (secondCount) {
            case 1:
                result += "**";
                result += letters[0];
                result += letters[1];
                result += "**"
                console.log(result);
                break;
            case 2:
                result += "*";
                result += letters[0];
                result += "--";
                result += letters[1];
                result += "*";
                console.log(result);
                break;
            case 3:
                result += letters[0];
                result += "----";
                result += letters[1];
                console.log(result);
                break;
            case 4:
                result += "*";
                result += letters[0];
                result += "--";
                result += letters[1];
                result += "*";
                console.log(result);
                break;


            default:
                break;
        }
        firstCount++
        secondCount++
        if (firstCount > 5) {
            firstCount = 1
        }
        if (secondCount > 4) {
            secondCount = 1;
        }
    }


}
printDna(100);