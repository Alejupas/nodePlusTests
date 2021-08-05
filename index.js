const rangeA = require('./problemsTasks/rangeA1')
console.log('1. rangeA',rangeA(4,9))

const rangeB = require('./problemsTasks/rangeB1')
console.log('1. rangeB',rangeB(12,19))

const sumA = require('./problemsTasks/sumA2')
console.log('2. sumA',sumA([1,2,3,4,200]))

const sumB = require('./problemsTasks/sumB2')
console.log('2. sumB', sumB([75, 150, 360, 50, 100]))

const getMottoA = require('./problemsTasks/houseA3')
console.log('3. getMottoA', getMottoA('Stark'))

const getMottoB = require('./problemsTasks/houseB3');
console.log('3. getMottoB', getMottoB('Greyjoy'))

const noDuplicates = require('./problemsTasks/noDuplicates4')
console.log('4. No Duplicates', noDuplicates([2,2,4,1,5,6,6,4,3,8,8,8]))

const wordSearch = require('./problemsTasks/wordSearch5')
console.log('5. WordSearch', wordSearch('This wAS Garfield', 'Was'))


const functionInFunction = require('./problemsTasks/theSum6')
console.log('6. Function in function sum', functionInFunction(5)(4))

const sevenAte9 = require('./problemsTasks/7ate9')
console.log('7. 7ate9', sevenAte9('797978887976543291'));

const logger = require('./problemsTasks/logger8')
const theCall = () => console.log('8. the spy log');
const spy = logger(theCall);
spy();
spy.report()

const nesting = require('./problemsTasks/nesting9')
console.log('9. Nesting', nesting([10, 6, [4, 8], 3, [6, 5, [9]]]));

const CalculatorA = require('./problemsTasks/calculatorA10')
var calcA = new CalculatorA(0);
console.log('10. Calculator A', calcA.add(5).multiply(2).add(20).divide(3).calculation());

const CalculatorB = require('./problemsTasks/calculatorB10')
const calcB = new CalculatorB(0);
console.log('10. Calculator B', calcB.add(5).multiply(2).add(20).divide(3).totalSum());

const sayss = require('./problemsTasks/concat11')
console.log('11. Say', sayss('Hello,')('it is me!'));