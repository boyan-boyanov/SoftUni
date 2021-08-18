function thePyramid(base, increment) {
    let stone = 0;
    let marbel = 0;
    let lapis = 0;
    let gold = 0;
    let count = 0;

    for (let i = base; i >= 1; i -= 2) {
        count++
        if (i === 1 || i === 2) {
            gold += i * i;
        } else if (count % 5 !== 0) {
            marbel += i * 4 - 4;
            stone += (i - 2) * (i - 2)
        } else {
            lapis += i * 4 - 4;
            stone += (i - 2) * (i - 2)
        }

    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbel * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`);
}

thePyramid(23, 0.5);