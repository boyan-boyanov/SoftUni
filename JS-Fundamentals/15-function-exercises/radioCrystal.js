function radioCrystal(quartz) {
    let target = quartz.shift();
    
    for (let i = 0; i < quartz.length; i++) {

        let cut = 0; // cut = -25 %
        let lap = 0; // -20 %
        let grind = 0; //-20
        let etch = 0; // -2
        let xRay = 0; //+1 

        let ore = quartz[i]
        
        while (ore !== target) {
            if (ore / 4 >= target - 1) {
                ore = Math.floor(ore / 4)
                cut++
            } else if (ore * 0.8 >= target - 1) {
                ore = Math.floor(ore * 0.8)
                lap++
            } else if (ore - 20 >= target - 1) {
                ore = Math.floor(ore - 20)
                grind++
            } else if (ore - 2 >= target - 1) {
                ore = Math.floor(ore - 2)
                etch++;
            } else if (ore + 1 === target) {
                ore += 1;
                xRay++
            }
            
        }


        console.log(`Processing chunk ${quartz[i]} microns`);
        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }
        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
        }
        if (grind > 0) {
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        }
        if (xRay > 0) {
            console.log(`X-ray x${xRay}`);
        }
        console.log(`Finished crystal ${ore} microns`);
    }

}

radioCrystal([1000, 4000, 8100, 8200]);