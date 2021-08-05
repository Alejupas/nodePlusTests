/**
 * Write a function sevenAte9 that removes each 9 that it is in between 7s.
sevenAte9('79712312') // returns '7712312'
sevenAte9('79797') // returns '777
 */

module.exports = sevenAte9 = (numbers) => {
    if(typeof numbers !== 'string') return console.log('It has to be a string. Yes, numbers in a string, correct.');

   numbers = numbers.replace(/79(?=7)/g, '7')
   return numbers;
}