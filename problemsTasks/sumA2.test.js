const sumA = require("./sumA2");

describe('sumA', () => {
    test('properly adds two numbers', () => {
        expect(sumA([1,2,6])).toBe(9);
    })
    test('should not execute anything but numbers in the array', () => {
        expect(sumA([1,6,'s'])).toEqual()
    })
})