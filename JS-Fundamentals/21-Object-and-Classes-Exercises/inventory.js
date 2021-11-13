function inventoryObj(myHeroes) {
    let allHeroes = [];

    for (let hero of myHeroes) {
        let command = hero.split(" / ");
        let items = command[2].split(", ")
        items.sort((a,b) => a.localeCompare(b))
        allHeroes.push({
            Hero: command[0],
            level: Number(command[1]),
            items: items.join(", ")
        })
    }
    allHeroes.sort((a,b) => a.level - b.level)
    for (const heroes of allHeroes) {
        console.log(`Hero: ${heroes.Hero}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`);
    }
}

inventoryObj([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )