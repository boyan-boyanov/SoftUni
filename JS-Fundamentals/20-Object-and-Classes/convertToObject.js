function convertToObject(jString) {
    let myObj = JSON.parse(jString)

    for (const [key, value] of Object.entries(myObj)) {
        console.log(`${key}: ${value}`);
    }
}