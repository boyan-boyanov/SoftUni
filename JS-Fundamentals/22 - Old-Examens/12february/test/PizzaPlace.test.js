let assert = require('chai').assert
let expect = require('chai').expect
const pizzUni = require('../PizzaPlace')

describe('Pizzaria', () => {
    it('Should order at least 1 pizza', () => {
        let expectResult = 'You just ordered 6 and 2.'
        let actualResult = pizzUni.makeAnOrder({ orderedPizza: 6, orderedDrink: 2 })


        assert.strictEqual(actualResult, expectResult)
        assert.strictEqual(pizzUni.makeAnOrder({ orderedPizza: 6, orderedDrink: 0 }), 'You just ordered 6')
        assert.strictEqual(pizzUni.makeAnOrder({ orderedPizza: 6 }), 'You just ordered 6')
        assert.throw(() => pizzUni.makeAnOrder({ orderedPizza: 0 }), 'You must order at least 1 Pizza to finish the order.')
        assert.throw(() => pizzUni.makeAnOrder({ orderedPizza: 0, orderedDrink: 6 }), 'You must order at least 1 Pizza to finish the order.')
        assert.throw(() => pizzUni.makeAnOrder({ orderedDrink: 6 }), 'You must order at least 1 Pizza to finish the order.')
    })

    it('Should prepare pizza', ()=> {
        let expectResult = 'The following pizzas are still preparing: Salsicha, Margarita.'
        let actualResult = pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'ready'}, {pizzaName: 'Salsicha', status: 'preparing'},{pizzaName: 'Margarita', status: 'preparing'}])
        assert.strictEqual(actualResult, expectResult)

        expectResult = 'The following pizzas are still preparing: Salsicha.'
        actualResult = pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'ready'}, {pizzaName: 'Salsicha', status: 'preparing'}])
        assert.strictEqual(actualResult, expectResult)

        expectResult = 'All orders are complete!'
        actualResult = pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'ready'}])
        assert.strictEqual(actualResult, expectResult)
    })

    it('Shold pay', () => {
        assert.strictEqual(pizzUni.orderType(100, 'Delivery'), 100)
        assert.strictEqual(pizzUni.orderType(0, 'Delivery'), 0)
        assert.strictEqual(pizzUni.orderType(-100, 'Delivery'), -100)
        assert.strictEqual(pizzUni.orderType(100, 'Carry Out'), 90)
        assert.strictEqual(pizzUni.orderType(-100, 'Carry Out'), -90)
        assert.strictEqual(pizzUni.orderType(0, 'Carry Out'), 0)

    })





})