const nesting = require('./nesting9')

describe('9. nesting', ()=>{
    test('should add nested numbers in array', ()=> {
        expect(nesting([10, 6, [4, 8], 3, [6, 5, [9]]])).toEqual(51)
    })

    test('should throw an error', ()=> {
        expect(nesting('hello')).toEqual('Error its not array')
    })

    test('should throw an error', ()=> {
        expect(nesting([10, 6, [4, 8], "hello", [6, 5, [9]]])).toEqual('Enter only number values')
    })
})