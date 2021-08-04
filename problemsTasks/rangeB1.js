// B
module.exports = (x, y) => {
    if(typeof x !== 'number' || typeof y !== 'number') return console.log('Should be ONLY numbers.')

    const rangeArr = Array(y - x + 1)
    .map((i) => x + 1)
    console.log(rangeArr);

    const numbersArr = [];

    for(let i = x; i < y; i++){
        numbersArr.push(i)
    }
    return numbersArr;
}