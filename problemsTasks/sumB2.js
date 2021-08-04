// B
module.exports = (numbers) =>{
    if(typeof numbers !== 'object') return console.log('It cannot be object. Use array instead.')

    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum;
}