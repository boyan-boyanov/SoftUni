function city(myObj){

    for (const key of Object.keys(myObj)) {
        console.log(`${key} -> ${myObj[key]}`);
    }
}