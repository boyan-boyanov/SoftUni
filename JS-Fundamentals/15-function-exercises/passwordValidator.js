function passwordValidator(password) {
    let passLen = passLenght(password);
    let passLetterOnly = passLetter(password);
    let passDigits = minTwoDigits(password);

    function passLenght(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function passLetter(pass) {
        let word = pass.split("");
        let flag = true;
        for (let letter of word) {
            letter = letter.charCodeAt()
            if ((letter >= 48 && letter <= 57) || (letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122)) {
            } else {
                flag = false;
            }
        }
        return flag
    }
    function minTwoDigits(pass) {
        let word = pass.split("");
        let counter = 0;
        for (let i = 0; i < word.length; i++) {
            let char = word[i].charCodeAt()
            if (char >= 48 && char <= 57) {
                counter++
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false
        }
    }

    if (passLen && passLetterOnly && passDigits) {
        console.log(`Password is valid`);
    } else {
        if (!passLen) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!passLetterOnly) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (!passDigits) {
            console.log(`Password must have at least 2 digits`);
        }
    }

}