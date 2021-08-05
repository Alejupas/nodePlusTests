const sumA = require("../sumA2");
describe('sumA', () => {
    test('properly adds two numbers', () => {
        expect(sumA([1,2])).toBe(3)
    })
})