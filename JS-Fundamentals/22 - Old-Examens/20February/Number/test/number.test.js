const assert = require('chai').assert
const expect = require('chai').expect
const numberOperations = require('../number')

describe("Number", () => {
    it('Pow Number', () => {
        assert.strictEqual(numberOperations.powNumber(2), 4)
        assert.strictEqual(numberOperations.powNumber(0), 0)
        assert.strictEqual(numberOperations.powNumber(-20), 400)
        assert.strictEqual(numberOperations.powNumber(-0), 0)
    })

    it('NumberChecker', () => {
        assert.throw(() => numberOperations.numberChecker('pesho'), 'The input is not a number!')
        assert.throw(() => numberOperations.numberChecker({}), 'The input is not a number!')
        assert.strictEqual(numberOperations.numberChecker(99), 'The number is lower than 100!')
        assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!')
        assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!')
        assert.strictEqual(numberOperations.numberChecker(-99), 'The number is lower than 100!')
        assert.strictEqual(numberOperations.numberChecker('-99'), 'The number is lower than 100!')
    })
    it('Sum of Array', () => {
       assert.deepEqual(numberOperations.sumArrays([100, 200, 300, 400], [1, 2, 3, 4, 5]), [101, 202, 303, 404, 5])
        assert.deepEqual(numberOperations.sumArrays([100, 200, 300, 400], [1, 2, 3]), [101, 202, 303, 400])
    })
})