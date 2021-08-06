const getMottoA = require('./houseA3')

describe('3. getMottoA test', ()=>{
    test('should return Bolton\'s motto',()=>{
        expect(getMottoA('Bolton')).toEqual("Our Blades Are Sharp")
    })

    test('should return error', ()=>{
        expect(getMottoA('Jonas Valanciunas')).toEqual('There is no such house')
    })

    test('should throw error', ()=>{
        expect(getMottoA(['Bolton'])).toEqual('It should only be a string.')
    })

    test('should throw error', ()=>{
        expect(getMottoA(55)).toEqual('It should only be a string.')
    })
})