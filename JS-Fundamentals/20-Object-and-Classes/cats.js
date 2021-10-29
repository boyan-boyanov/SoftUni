function catsInfo(array) {
    let cats = [];

    class Cat {
        constructor(catName, age) {
            this.name = catName;
            this.age = age;
        }
        talk() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(" ");
        let name = element[0];
        let age = element[1];
        cats.push(new Cat(name, age));
    }
    for (const key of cats) {
        key.talk()
    }
}