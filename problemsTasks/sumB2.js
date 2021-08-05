// B
module.exports = (numbers) =>{
    if(typeof numbers !== 'object') return console.log('It cannot be object. Use array instead.')

    return numbers.reduce((acc, cur) => acc + cur, 0)
}