function login(input) {
    let index = 0;
    let username = String(input[index++]);
    let pass = username.split("").reverse().join("");


    for (let i = 1; i <= 4; i++) {
        let command = String(input[index++])
        if (command === pass) {
            console.log(`User ${username} logged in.`); break;
        } else if (i < 4) {
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${username} blocked!`);
        }
    }
}

login(['Acer','login','go','let me in','recA'])