const sumA = require("./sumA2");

describe('2. sumA test', () => {
    test('properly adds numbers', () => {
        expect(sumA([1,2,6])).toBe(9);
    });

    test('should return error', () => {
        expect(sumA([1,4,'s'])).toEqual('only numbers can be added')
    })
})