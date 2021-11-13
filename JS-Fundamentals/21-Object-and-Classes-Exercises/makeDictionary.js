function makeDictionary(array) {
    let myObj = []

    for (let input of array) {
        let current = JSON.parse(input)
        let entries = Object.entries(current)
        for (let [key, value] of entries) {
            let index = myObj.findIndex(x => x.term === key)
            if (index > -1) {
                myObj[index].definition = value
            } else {
                myObj.push({
                    term: key,
                    definition: value,
                })
            }
        }
    }
    myObj.sort((a, b) => a.term.localeCompare(b.term))
    for (let print of myObj) {
        console.log(`Term: ${print.term} => Definition: ${print.definition}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"TESTER"}'
]
);
