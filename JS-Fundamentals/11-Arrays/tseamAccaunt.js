function tseamAccaunt(array) {
    let index = 0
    let command = array[index];
    let peterAcc = array[index++]
    peterAcc = peterAcc.split(" ")

    while (command !== "Play!") {
        let game = String(array[index]);
        game = game.split(" ")
        let id = -1;

        if (game[0] === "Install") {
            if (!peterAcc.includes(game[1])) {
                peterAcc.push(game[1])
            }
            //let flag = false;
            // for (let i = 0; i < peterAcc.length; i++) {          - това е вместо редове 13-15
            //     if (peterAcc[i] === game[1]) {
            //         flag = true;
            //      }
            //  }
            //  if (!flag) {
            //      peterAcc.push(game[1])
            //  }
        } else if (game[0] === "Uninstall") {
            id = peterAcc.findIndex(item => item === game[1])
            if (id > -1) {
                peterAcc.splice(id, 1)
            }
            // let uninstall = peterAcc;
            // peterAcc = [];
            // for (let i = 0; i < uninstall.length; i++) {               - това вместо редове редове 26-29
            //     if (uninstall[i] !== game[1]) {
            //         peterAcc.push(uninstall[i])
            //     }
            // }
        } else if (game[0] === "Update") {
            id = peterAcc.findIndex(item => item === game[1])
            if (id > -1) {
                peterAcc.splice(id, 1)
                peterAcc.push(game[1]);
            }
            // let update = peterAcc;
            // peterAcc = [];
            // let flag = false
            // for (let i = 0; i < update.length; i++) {
            //     if (update[i] !== game[1]) {
            //         peterAcc.push(update[i])
            //     } else {
            //         flag = true;
            //     }
            // } if (flag) {
            //     peterAcc.push(game[1])
            // }

        } else if (game[0] === "Expansion") {
            let upgrade = game[1].split("-")

            id = peterAcc.findIndex(item => item === upgrade[0]);
            if (id > -1) {
                peterAcc.splice(id + 1, 0, upgrade[0] + ":" + upgrade[1])
            }
            //let exp = peterAcc;
            //peterAcc = [];
            // for (let i = 0; i < exp.length; i++) {                            - това вместо редовете 59-62
            //     if (exp[i] !== upgrade[0]) {
            //        peterAcc.push(exp[i])
            //   } else {
            //       peterAcc.push(exp[i])
            //       peterAcc.push(`${upgrade[0]}:${upgrade[1]}`)
            //   }
            //  }
        }

        index++
        command = array[index]
    }
    console.log(peterAcc.join(" "));

}

tseamAccaunt(['CS WoW Diablo', 'Install LoL', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])