function triplesOfLatinLetters(n) {
    let code = "a"
    let start = code.charCodeAt()
    let end = start + Number(n)

    for (let i = start; i < end; i++) {
        for (let k = start; k < end; k++) {
            for (let j = start; j < end; j++) {
                let result = String.fromCharCode(i) + String.fromCharCode(k) + String.fromCharCode(j)
                console.log(result);

            }
        }
    }
}

triplesOfLatinLetters(3);