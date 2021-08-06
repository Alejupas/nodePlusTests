/**
 * ) Create two versions of a calculator module:
a) Do not use any ES6 functionality
b) Use a ES6 class
Calculator should have four methods: add, subtract, multiply and divide. All of
calculator methods should be chainable.
Example:
var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10
 */
// A
module.exports = function(x) { 
    var total = x;

    this.add = function(y){
        total += y
        return this;
    }

    this.subtract = function(y) {
        total -= y;
        return this;
    }

    this.multiply = function(y){
        total *= y;
        return this;
    }

    this.divide = function(y){
        total /= y;
        return this;
    }

    this.calculation = function(){
        return isNaN(total) ? 'It is not a number.' : total;
    }
}