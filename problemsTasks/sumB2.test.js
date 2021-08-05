const sumB = require('./sumB2')

describe('2. sumB test', () => {
    test('properly adds numbers', () => {
        expect(sumB([1,2,6])).toBe(9);
    });

    test('should return error', () => {
        expect(sumB([11,22,'r'])).toEqual('insert only numbers')
    })

    test('sum should be falsy', ()=>{
        expect(sumB([15, 22, 4])).not.toBe(61)
    })
})