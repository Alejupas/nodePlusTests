/**
 * Given an array with nested arrays of numbers (ex.: [10, 6, [4, 8], 3, [6, 5, [9]]]) create
a function that would sum all numbers from provided array.
 */

module.exports = (numArray) => {

    const flattenedArray = numArray.flat(2);
    return flattenedArray.reduce(((acc, cur) => acc + cur), 0);
}