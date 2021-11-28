const assert = require('chai').assert
const expect = require('chai').expect
const cinema = require('../cinema')

describe('Cinema', () => {
    it('Empty array', () => {
        const input = []
        expectedResult = "There are currently no movies to show."
        actualResult = cinema.showMovies(input)
        assert.strictEqual(actualResult, expectedResult)
    })

    it('Move array', () => {
        const input = ['King Kong', 'The Tomorrow War', 'Joker']
        expectedResult = 'King Kong, The Tomorrow War, Joker'
        actualResult = cinema.showMovies(input)
        assert.strictEqual(actualResult, expectedResult)
    })

    it('Should Valid schedule', () => {
        assert.strictEqual(cinema.ticketPrice("Premiere"), 12)
        assert.strictEqual(cinema.ticketPrice("Normal"), 7.5)
        assert.strictEqual(cinema.ticketPrice("Discount"), 5.5)
    })

    it('Should first sit be a number', () => {
        assert.strictEqual(cinema.swapSeatsInHall("Premiere", 2), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall({}, 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall([], 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(true, 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(0, 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(21, 4), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(-1, 4), "Unsuccessful change of seats in the hall.")
    })

    it('Should second sit be a number', () => {
        assert.strictEqual(cinema.swapSeatsInHall(2, "Premiere"), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(2, {}), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(2, []), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(2, true), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(3, 0), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(4, 21), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(5, -1), "Unsuccessful change of seats in the hall.")
    })

    it('Should be different numbers', () => {
        assert.strictEqual(cinema.swapSeatsInHall(2, 2), "Unsuccessful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(12, 12), "Unsuccessful change of seats in the hall.")
    })

    it("Should be a valid chanche", () => {
        assert.strictEqual(cinema.swapSeatsInHall(2, 3), "Successful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(20, 13), "Successful change of seats in the hall.")
        assert.strictEqual(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.")
    })

    it('Should throw error', () => {
        expect(cinema.ticketPrice.bind((''))).to.throw('Invalid projection type.');
        assert.throw(() => cinema.ticketPrice("pop"), 'Invalid projection type.')
    })
})

