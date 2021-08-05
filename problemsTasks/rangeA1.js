/**1) Create two versions of a function called range which takes two numbers x and y and
returns an array filled with all numbers from x (inclusive) to y (exclusive)
a) Do not use any ES6 methods
b) Use a suitable ES6 method
 */

// A
function rangeA(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return 'It should be ONLY numbers.'
    }
    var rangeArray = [];
    for(var i = x; i < y; i++){
        rangeArray.push(i)
    }
    return rangeArray
}

module.exports = rangeA;