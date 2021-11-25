const assert = require('chai').assert
const expect = require('chai').expect
const dealership = require('../dealership')

describe('DealerShip', () =>{
    it('New Car Cost', ()=>{
        assert.strictEqual(dealership.newCarCost('Audi A4 B8', 200000), 185000)
        assert.strictEqual(dealership.newCarCost('Audi A4 B', 200000), 200000)
        assert.strictEqual(dealership.newCarCost('', 200000), 200000)
        assert.strictEqual(dealership.newCarCost('Audi A6 4K', 200000), 180000)
        assert.strictEqual(dealership.newCarCost('Audi A8 D5', 200000), 175000)
        assert.strictEqual(dealership.newCarCost('Audi TT 8J', 15000), 1000)
        assert.strictEqual(dealership.newCarCost('Audi TT 8J', 13000), -1000)
    })

    it('Car Equipment', ()=>{
        assert.deepEqual(dealership.carEquipment(['heatedseat', 'roof', 'mirror', 'sport', 'navi'], [0,3,4]), ['heatedseat', 'sport', 'navi'])

    })

    it('Ero Category', () =>{
        assert.strictEqual(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
        assert.strictEqual(dealership.euroCategory(0), 'Your euro category is low, so there is no discount from the final price!')
        assert.strictEqual(dealership.euroCategory(-1), 'Your euro category is low, so there is no discount from the final price!')
        assert.strictEqual(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
        assert.strictEqual(dealership.euroCategory(40), `We have added 5% discount to the final price: 14250.`)

    })
})