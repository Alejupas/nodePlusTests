// B
module.exports = (numbers) =>{
    if(!Array.isArray(numbers)){
        return 'It should be array. Use array instead.'
    } 
    if (numbers.some(isNaN)) {
        return 'insert only numbers'
    }
    return numbers.reduce((acc, cur) => acc + cur, 0)
}