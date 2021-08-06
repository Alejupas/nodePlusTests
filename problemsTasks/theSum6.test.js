const functionInFunction = require('./theSum6')

describe('6. functionInFunction', ()=>{
    test('should add two numbers properly', ()=> {
        expect(functionInFunction(5)(5)).toBe(10)
    })

    test('should return error', ()=> {
        expect(functionInFunction('and')(6)).toBe('It has to be a number.')
    })

    test('should return error', ()=> {
        expect(functionInFunction(6)('and')).toBe('It has to be a number.')
    })

    test('should return falsy value', ()=> {
        expect(functionInFunction(6)(2)).not.toBe(4)
    })
    
})