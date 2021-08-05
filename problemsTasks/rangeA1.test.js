const rangeA = require('./rangeA1')

describe('1. rangeA test', () => {
    test('should give range, excluding last number', () => {
        expect(rangeA(4,8)).toEqual([4,5,6,7])
    });

    test('should return error', () => {
        expect(rangeA(2, 'hello')).toEqual('It should be ONLY numbers.')
    });
})