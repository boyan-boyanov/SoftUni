function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let key = arr1[i];
        for (let k = 0; k < arr2.length; k++) {
            if (key === arr2[k]) {
                console.log(key);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);