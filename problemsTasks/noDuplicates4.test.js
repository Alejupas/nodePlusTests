const noDuplicates = require('./noDuplicates4')

describe('4. noDuplicates function', ()=>{
    test('should return no duplicates array', ()=> {
        expect(noDuplicates([2,3,4,2,3,4,1])).toEqual([2,3,4,1])
    })
})