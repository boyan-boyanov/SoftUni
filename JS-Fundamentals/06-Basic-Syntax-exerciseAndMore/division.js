function division(div) {
    if (div % 10 === 0) {
        console.log("The number is divisible by 10");
    } else if (div % 7 === 0) {
        console.log("The number is divisible by 7");
    } else if (div % 6 === 0) {
        console.log("The number is divisible by 6");
    } else if (div % 3 === 0) {
        console.log("The number is divisible by 3");
    } else if (div % 2 === 0) {
        console.log("The number is divisible by 2");
    } else { console.log("Not divisible"); }
}

division(30)