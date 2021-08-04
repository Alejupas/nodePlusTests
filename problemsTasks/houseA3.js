// Given a list of the following major Houses of Westeros and their respective mottos:

// Write two versions of a function that, when passed the name of a House, returns its
// motto.
// a) Do not use any ES6 methods
// b) Use a suitable ES6 method
// Example:
// motto("Tyrell") // returns "Growing strong"

var houses = require('./houses')

module.exports = function(houseName){
    if(typeof houseName !== 'string') return console.log('It should only be a string.')

    for(let i = 0; i < houses.length; i++){
        if(houses[i].name === houseName) {
            motto = houses[i].motto;
        }
    }
    return motto || 'There is no such house'
}