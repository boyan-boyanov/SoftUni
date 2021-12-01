const assert = require('chai').assert
const expect = require('chai').expect
const testNumbers = require('../testNumbers')

describe("Sum of Numbers", () => {
    it("Should first num be a Number", () => {
        assert.strictEqual(testNumbers.sumNumbers([], 3), undefined)
        assert.strictEqual(testNumbers.sumNumbers("", 3), undefined)
        assert.strictEqual(testNumbers.sumNumbers(true, 3), undefined)
        assert.strictEqual(testNumbers.sumNumbers({}, 3), undefined)
    })

    it("Should second num be a Number", () => {
        assert.strictEqual(testNumbers.sumNumbers(3, []), undefined)
        assert.strictEqual(testNumbers.sumNumbers(3, ''), undefined)
        assert.strictEqual(testNumbers.sumNumbers(5, true), undefined)
        assert.strictEqual(testNumbers.sumNumbers(12, {}), undefined)
    })

    it('Should calculate sum', () => {
        assert.strictEqual(testNumbers.sumNumbers(3, 3), '6.00')
        assert.strictEqual(testNumbers.sumNumbers(3, -3), '0.00')
        assert.strictEqual(testNumbers.sumNumbers(-3, 8), '5.00')
        assert.strictEqual(testNumbers.sumNumbers(13, -3), '10.00')
        assert.strictEqual(testNumbers.sumNumbers(-3, -3), '-6.00')
        assert.strictEqual(testNumbers.sumNumbers(3, 3.146), '6.15')
        assert.strictEqual(testNumbers.sumNumbers(3.146, 3), '6.15')
        assert.strictEqual(testNumbers.sumNumbers(3.123, 3.27), '6.39')
        assert.strictEqual(testNumbers.sumNumbers(-3.123, -3.27), '-6.39')
    })

    it('Should return Even or Odd', () => {
        assert.strictEqual(testNumbers.numberChecker(2), 'The number is even!')
        assert.strictEqual(testNumbers.numberChecker('22'), 'The number is even!')
        assert.strictEqual(testNumbers.numberChecker(3), "The number is odd!")
        assert.strictEqual(testNumbers.numberChecker('23'), "The number is odd!")
        assert.strictEqual(testNumbers.numberChecker(0), 'The number is even!')
        assert.strictEqual(testNumbers.numberChecker('0'), 'The number is even!')
    })
    it('Should throw error', () => {
        assert.throw(() => testNumbers.numberChecker('pesho'), "The input is not a number!")
        // assert.throw(() => testNumbers.numberChecker(true), "The input is not a number!")
        //assert.throw(() => testNumbers.numberChecker([]), "The input is not a number!")
        expect(testNumbers.numberChecker.bind('pesho')).to.throw("The input is not a number!")
        expect(testNumbers.numberChecker.bind({})).to.throw("The input is not a number!")
        expect(testNumbers.numberChecker.bind(true)).to.throw("The input is not a number!")
        expect(testNumbers.numberChecker.bind([])).to.throw("The input is not a number!")
    })
    it('Should be average', () => {
        assert.strictEqual(testNumbers.averageSumArray([1, 2, 3]), 2)
        assert.strictEqual(testNumbers.averageSumArray([-1, -2, -3]), -2)
        assert.strictEqual(testNumbers.averageSumArray([1, 2, -3]), 0)
        assert.strictEqual(testNumbers.averageSumArray([10, 20, -3]), 9)
    })
})