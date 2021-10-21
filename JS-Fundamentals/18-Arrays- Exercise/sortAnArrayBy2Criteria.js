function sortAnArrayBy2Criteria(array) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(array.join("\n"));

}

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);