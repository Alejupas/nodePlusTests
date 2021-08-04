// B
module.exports = (x, y) => {
    if(typeof x !== 'number' || typeof y !== 'number') return console.log('Should be ONLY numbers.')

    const rangeArr = Array(y - x)
    .map((i) => x)

    const numbersArr = [];

    for(let i = x; i < y; i++){
        numbersArr.push(i)
    }
    return numbersArr;
}