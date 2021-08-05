const rangeB = require('./rangeB1')

describe('1. rangeB function test', () => {
    test('should give range, excluding last number', ()=>{
        expect(rangeB(1,5)).toEqual(([1,2,3,4]))
    });

    test('should throw an error', () => {
        expect(rangeB(1, "s")).toEqual('Should be ONLY numbers.')
    });
})