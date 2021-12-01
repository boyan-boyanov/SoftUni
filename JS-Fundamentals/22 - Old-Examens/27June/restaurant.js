class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }
    loadProducts(products) {
        for (let product of products) {
            let [name, quantity, totalPrice] = product.split(' ')
            quantity = Number(quantity)
            totalPrice = Number(totalPrice)
            if (this.budgetMoney < totalPrice) {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            } else {
                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] += quantity
                } else {
                    this.stockProducts[name] = quantity
                }
                this.budgetMoney -= totalPrice
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            }
        }
        // maybe history need be clear...
        return this.history.join('\n')
    }

    addToMenu(meal, needProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        } else {
            this.menu[meal] = {
                price: price,
                needProducts: needProducts
            }
            if ((Object.keys(this.menu).length) === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                let numberOfMeals = Object.keys(this.menu).length
                return `Great idea! Now with the ${meal} we have ${numberOfMeals} meals in the menu, other ideas?`
            }
        }
    }

    showTheMenu() {
        let numberOfMeals = Object.keys(this.menu).length
        if (numberOfMeals < 1) {
            return "Our menu is not ready yet, please come later..."
        } else {
            let result = []
            for (let [name, price] of Object.entries(this.menu)) {
                result.push(`${name} - $ ${price.price}`)
                
            }
            return result.join('\n')
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let isEnoughtProduct = true;
            let products = this.menu[meal].needProducts
            for (let product of products) {
                let [name, quantity] = product.split(' ')
                quantity = Number(quantity)
                if (!this.stockProducts.hasOwnProperty(name) || this.stockProducts[name] < quantity) {
                    isEnoughtProduct = false
                }
            }
            if (isEnoughtProduct === true) {
                for (let product of products) {
                    let [name, quantity] = product.split(' ')
                    quantity = Number(quantity)
                    this.stockProducts[name] -= quantity
                }
                this.budgetMoney += this.menu[meal].price
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }else{
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
    }
}


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen);


