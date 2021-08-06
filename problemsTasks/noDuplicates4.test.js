const noDuplicates = require('./noDuplicates4')

describe('4. noDuplicates function', ()=>{
    test('should return no duplicates array', ()=> {
        expect(noDuplicates([2,3,4,2,3,4,1])).toEqual([2,3,4,1])
    })

    test('should return error', ()=> {
        expect(noDuplicates(2,4,6,4,2)).toEqual('It should only be an array.')
    })

    test('should be falsy', ()=> {
        expect(noDuplicates([2,3,4,2,3,4,1])).not.toBe([2,3,4,1,82])
    })
})