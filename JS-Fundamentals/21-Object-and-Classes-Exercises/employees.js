function employees(listOfEmployees) {
    let list = []
    for (let worker of listOfEmployees) {
                let myObj = {
            name: worker,
            num: worker.length
        }
        list.push(myObj)
    }
    for (let work of list) {
        console.log(`Name: ${work.name} -- Personal Number: ${work.num}`);
    }
    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);