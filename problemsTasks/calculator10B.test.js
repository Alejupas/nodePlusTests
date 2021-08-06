const CalculatorB = require('./calculatorB10')



describe('10. CalculatorA', ()=>{
    test('should add numbers', ()=> {
        const calcB = new CalculatorB(0);
        expect(calcB.add(5).multiply(2).add(20).divide(3).totalSum()).toEqual(10)
    });

    test('should be falsy', ()=> {
        const calcB = new CalculatorB(0);
        expect(calcB.add(5).multiply(2).add(20).divide(3).totalSum()).not.toBe(110)
    });

    test('should throw error', ()=> {
        const calcB = new CalculatorB(0);
        expect(calcB.add(5).multiply(2).add('hello').divide(3).totalSum()).toEqual('Only numbers accepted. No other symbols.')
    });
})