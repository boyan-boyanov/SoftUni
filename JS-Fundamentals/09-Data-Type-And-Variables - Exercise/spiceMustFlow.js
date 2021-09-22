function spiceNustFlow(yield) {
    let spice = 0;
    let day = 0;
    while (yield >= 100) {
        spice += yield - 26;
        day++;
        yield -= 10;
    }
    spice = spice > 26 ? spice - 26 : 0;

    console.log(day);
    console.log(spice);

}