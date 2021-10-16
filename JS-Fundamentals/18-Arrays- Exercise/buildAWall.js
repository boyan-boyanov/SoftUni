function buildAWall(walls) {
    walls.map(Number);
    let numberOfWalls = walls.length;
    let totalConcrete = 0;
    let final = []

    let index = 0;
    while (index !== -1) {
        index = walls.findIndex(x => x < 30);
        if (index !== -1) {
            let dailyUse = 0;
            for (let i = 0; i < walls.length; i++) {
                if (walls[i] < 30) {
                    dailyUse += 195;
                    walls[i] += 1
                }
            }
            totalConcrete += dailyUse
            final.push(dailyUse)
        }
    }
    let price = totalConcrete * 1900
    console.log(final.join(", "));
    console.log(`${price} pesos`);
}

buildAWall([30]);