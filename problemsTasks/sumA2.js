/**Create two versions of a function called sum which takes a list of numbers and
returns a sum of them.
a) Do not use any ES6 methods
b) Use a suitable ES6 method
 */

// A
function sumA(numbers){
    var counter = 0;
    if(!Array.isArray(numbers)){
        return 'It should be array. Use array instead.'
    }

    if(typeof numbers !== []) return 'only numbers can be added'

    numbers.forEach((num)=>{
        counter += num})
    return counter;
}

module.exports = sumA;