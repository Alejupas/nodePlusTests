const say = require('./concat11')


describe('11. concat', ()=>{
    test('should add two strings with space in between', ()=> {
        expect(say('Good morning,')('people!')).toEqual('Good morning, people!')
    })

    test('should show error', ()=> {
        expect(say('Good morning,')(5)).toEqual('It is not a string.')
    })

    test('should show error', ()=> {
        expect(say('Good morning,')('everyone!')).not.toBe('Good morning,everyone!')
    })

})