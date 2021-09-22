function lowerOrUpper(letter) {
    let code = letter.charCodeAt()

    if (code >= 97 && code <= 122) {
        console.log(`lower-case`);
    } else if (code >= 65 && code <= 90) {
        console.log(`upper-case`);
    }
}