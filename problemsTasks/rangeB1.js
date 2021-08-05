// B
module.exports = (x, y) => {
    if(typeof x !== 'number' || typeof y !== 'number') return 'Should be ONLY numbers.'
    
    const numbersArr = [];

    for(let i = x; i < y; i++){
        numbersArr.push(i)
    }
    return numbersArr;
}