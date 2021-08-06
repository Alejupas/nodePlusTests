const sevenAte9 = require('./7ate9')

describe('7. sevenAte9', ()=>{
    test('should remove 9 between 7\'s', ()=> {
        expect(sevenAte9('797123')).toBe('77123')
    })

    test('should remove 9 between 7\'s', ()=> {
        expect(sevenAte9('7971234')).not.toBe('77123')
    })

    test('should throw error', ()=> {
        expect(sevenAte9([1,3,4,2])).toBe('It has to be a string of numbers')
    })
})