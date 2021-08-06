const CalculatorA = require('./calculatorA10')

var calcA = new CalculatorA(0);

describe('10. CalculatorA', ()=>{
    test('should add nested numbers in array', ()=> {
        expect(calcA.add(5).multiply(2).add(20).divide(3).calculation()).toEqual(10)
    })

    test('should be falsy', ()=> {
        expect(calcA.add(5).multiply(2).add(20).divide(3).calculation()).not.toBe(110)
    })

    test('should throw error', ()=> {
        expect(calcA.add(5).multiply(2).add('hello').divide(3).calculation()).toEqual('It is not a number.')
    })
})