const getMottoB = require('./houseB3')

describe('3. getMottoB test', ()=>{
    test('should return Bolton\'s motto',()=>{
        expect(getMottoB('Bolton')).toEqual("Our Blades Are Sharp")
    })

    test('should return error', ()=>{
        expect(getMottoB('Maironis')).toEqual('There is no such house. Watch more Game of Thrones.')
    })

    test('should throw error', ()=>{
        expect(getMottoB(['Bolton'])).toEqual('One simply cannot use anything but string. Use wisely.')
    })

    test('should throw error', ()=>{
        expect(getMottoB(10)).toEqual('One simply cannot use anything but string. Use wisely.')
    })
})