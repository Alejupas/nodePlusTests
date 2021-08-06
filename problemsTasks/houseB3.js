var houses = require('./houses')
// B
module.exports = (houseName) => {
    if(typeof houseName !== 'string') return 'One simply cannot use anything but string. Use wisely.'

    const house = houses.find((obj) => obj.name === houseName ? obj.motto : '')

    return house?.motto || 'There is no such house. Watch more Game of Thrones.'
}