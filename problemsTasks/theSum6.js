/**
 * Write a function which takes a number x and returns a function, which takes another
number y and returns the sum of numbers x and y.
 */

module.exports = (x) => {
    if (typeof x !== 'number') return () =>  'It has to be a number.';

    return (y) => (typeof y !== 'number' ? 'It has to be a number.' : x + y)
}