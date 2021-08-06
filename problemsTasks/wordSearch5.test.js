const wordSearch = require('./wordSearch5')

describe('5. wordSearch function', ()=>{
    test('should return true on search query', ()=> {
        expect(wordSearch('Good day everyone', 'gOOD')).toBe(true)
    })

    test('should return error', ()=> {
        expect(wordSearch([1,3,5], 'what')).toEqual('It has to be a string.')
    })

    test('should be falsy', ()=> {
        expect(wordSearch('Good day everyone', 'nice')).toBe(false)
    })
})