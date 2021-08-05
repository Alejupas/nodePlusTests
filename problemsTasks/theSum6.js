/**
 * Write a function which takes a number x and returns a function, which takes another
number y and returns the sum of numbers x and y.
 */

module.exports = (x) => {
    if (typeof x !== 'number') return console.log('It has to be a number.')

    otherFunction = (y) => (typeof y !== 'number' ? console.log('It has to be a number.') : x + y)
    return otherFunction;
}