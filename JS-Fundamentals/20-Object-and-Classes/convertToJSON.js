function convertToJSON(name, secondName, age) {
    let person = {}
    person.name = name;
    person.lastName = secondName;
    person.hairColor = age

    let send = JSON.stringify(person)
    return send
}