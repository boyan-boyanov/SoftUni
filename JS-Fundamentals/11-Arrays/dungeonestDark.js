function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    array = array[0].split("|");
    let bestRoom = 1;
    let flag = true;

    for (let i = 0; i < array.length; i++) {
        let action = array[i];
        action = action.split(" ")
        if (action[0] === 'potion') {
            health += Number(action[1]);
            if (health <= 100) {
                console.log(`You healed for ${action[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${action[1] - (health - 100)} hp.`);
                console.log(`Current health: 100 hp.`);
                health = 100
            }
        } else if (action[0] === 'chest') {
            coins += Number(action[1]);
            console.log(`You found ${action[1]} coins.`);
        } else {
            health -= Number(action[1]);
            if (health > 0) {
                console.log(`You slayed ${action[0]}.`);
            } else {
                console.log(`You died! Killed by ${action[0]}.`)
                flag = false
                break;
            }
        }
        bestRoom++
    }
    if (!flag) {
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);        
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])