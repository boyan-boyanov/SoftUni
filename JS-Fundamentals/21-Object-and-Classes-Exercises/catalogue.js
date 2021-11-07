function catalogue(array) {
    let myObj = {}

    for (let item of array) {
        let [name, cost] = item.split(" : ");
        let lether = name[0]

        if (!myObj[lether]) {
            myObj[lether] = []
        }
        let exist = myObj[lether].indexOf(name)
        if (exist <= 0) {
            myObj[lether].push("  " + name + ": " + cost)
            myObj[lether].sort((a, b) => a.localeCompare(b))
        }
    }
    let ordered = Object.keys(myObj).sort().reduce(
        (obj, key) => {
            obj[key] = myObj[key];
            return obj;
        },
        {}
    );
    console.log(ordered);
    for (let [key, value] of Object.entries(ordered)) {
        console.log(key);

        console.log(value.join("\n"));
    }

}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
])