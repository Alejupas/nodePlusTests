const logger = require('./logger8')

const theCall = () => console.log('hello');
const spy = logger(theCall);

describe('8. logger', ()=>{
    test('should log hello in console', ()=> {
        expect(spy()).toEqual(console.log('hello'))
    })

    test('should log function calls in counter', ()=> {
        expect(spy.report()).toEqual(console.log('totalCalls: ' + 1))
    })
})