function charactersInRange(str1, str2) {
    let result = "";
    let first = str1.charCodeAt();
    let second = str2.charCodeAt();

    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }

    for (let i = first + 1; i < second; i++) {
        let character = String.fromCharCode(i);
        result += character + " ";
    }
    return result
}