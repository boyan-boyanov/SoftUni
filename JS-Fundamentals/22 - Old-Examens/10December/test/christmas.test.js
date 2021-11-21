let ChristmasMovies = require('../christmas')
let assert = require('chai').assert

describe('Christmas Movies', () => {
    let movies = {}
    beforeEach(() => movies = new ChristmasMovies())

    describe('Test for valid class structure', () => {
        it('Test valid property', () => {
            assert.deepEqual(movies.movieCollection, [])
            assert.deepEqual(movies.watched, {})
            assert.deepEqual(movies.actors, [])
        })
    })

    describe('Test method Buy Movie', () => {
        it('Add to colection', () => {
            let expectedResult = 'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!'
            let actualResult = movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Macaulay Culkin'])
            assert.strictEqual(actualResult, expectedResult)
        })
        it('Add to colection', () => {
            let expectedResult = 'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!'
            let actualResult = movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            assert.strictEqual(actualResult, expectedResult)
        })

        it('Add to colection same movie', () => {
            let expectedResult = 'You already own Home Alone in your collection!'
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            assert.throw(() => movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']), expectedResult)
        })
    })

    describe('Test Watched Movie', () => {
        it('Watch first time', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.watchMovie('The Grinch');
            assert.deepEqual(movies.watched, { 'The Grinch': 1 })
        })
        it('Watch 2 times', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.watchMovie('The Grinch');
            movies.watchMovie('The Grinch');
            assert.deepEqual(movies.watched, { 'The Grinch': 2 })
        })
        it('Watch film that is not in collection', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            assert.throw(() => movies.watchMovie('Grinch'), 'No such movie in your collection!')
        })
    })
    // maybe more test here
    describe('Test Discard Movies', () => {
        it('Discard not exist Movie', () => {
            assert.throw(() => movies.discardMovie('The Grinch'), 'The Grinch is not at your collection!')
        })
        it('Discard not watched movie', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            assert.throw(() => movies.discardMovie('The Grinch'), 'The Grinch is not watched!')
        })
        it('Discard watched Movie', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.watchMovie('The Grinch');
            assert.strictEqual(movies.discardMovie('The Grinch'), 'You just threw away The Grinch!')
        })
        it('Test if movie delete from watch list', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.watchMovie('The Grinch');
            movies.discardMovie('The Grinch');
            assert.throw(() => movies.watchMovie('Grinch'), 'No such movie in your collection!')
            assert.deepEqual(movies.movieCollection, [])
        })
    })
    describe('Favorite Movie', () => {
        it('No watched movies', () => {
            assert.throw(() => movies.favouriteMovie(), 'You have not watched a movie yet this year!')
        })

        it('Favorite Movie info', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            movies.watchMovie('The Grinch');
            movies.watchMovie('The Grinch');
            movies.watchMovie('THome Alone');
            assert.strictEqual(movies.favouriteMovie(), 'Your favourite movie is The Grinch and you have watched it 2 times!')
        })
        it('if there is NO favourite', () => {
            movies.watched['Home Alone'] = 1
            movies.watched['She'] = 2
            assert.deepEqual(movies.favouriteMovie(), 'Your favourite movie is She and you have watched it 2 times!')
        })

    })
    describe('Most Starred Actors', () => {
        it('No watched movie', () => {
            assert.throw(() => movies.mostStarredActor(), 'You have not watched a movie yet this year!')
        })
        it('Most stared info', () => {
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch']);
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            movies.buyMovie('Home Alone2', ['Macaulay Culkin'])
            assert.strictEqual(movies.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!')
        })
    })
})