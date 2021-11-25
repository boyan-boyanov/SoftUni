class ChristmasDinner {

    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }



    shopping(products) {
        if (products[1] > this.budget) {
            throw new Error("Not enough money to buy this product")
        } else {
            let type = products[0]
            this.budget -= products[1]
            this.products.push(type)
            return `You have successfully bought ${type}!`
        }
    }

    recipes(recipes) {
        let needProducts = recipes.productsList
        for (let el of needProducts) {
            if (!this.products.includes(el)) {
                throw new Error("We do not have this product")
            }
        }
        let newDish = {
            recipeName: recipes.recipeName,
            productsList: needProducts
        }
        this.dishes.push(newDish)
        return `${recipes.recipeName} has been successfully cooked!`
    }
    // dinner.inviteGuests('Ivan', 'Oshav');

    inviteGuests(name, dish) {
        if (!this.dishes.find(s => s.recipeName === dish)) {
            throw new Error("We do not have this dish")
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = []
        for (let name in this.guests) {
            let meal = this.dishes.find(m => m.recipeName === this.guests[name])
            result.push(`${name} will eat ${this.guests[name]}, which consists of ${meal.productsList.join(', ')}`)
        }
        return result.join('\n')

    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 2]));
console.log(dinner.shopping(['Cabbage', 4]));
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('peter', 'Folded cabbage leaves filled with rice');
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
