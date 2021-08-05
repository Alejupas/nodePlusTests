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
