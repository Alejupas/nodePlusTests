const sumA = require("./sumA2");

describe('2. sumA test', () => {
    test('properly adds numbers', () => {
        expect(sumA([1,2,6])).toBe(9);
    });

    test('should return error', () => {
        expect(sumA([1,4,'s'])).toEqual('insert only numbers')
    })

    test('sum should be falsy', ()=>{
        expect(sumA([10, 300, 3])).not.toBe(333)
    })
})