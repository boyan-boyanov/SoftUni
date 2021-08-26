function rightPlace(first, letter, second) {
    let word = first.replace("_", letter);

    let result = word === second ? "Matched" : "Not Matched";
    console.log(result);
}

rightPlace('Str_ng', 'I', 'Strong');