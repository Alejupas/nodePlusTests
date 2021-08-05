class Calculator {
    constructor(x){
            this.total = x;
        }

        add(y) {
            this.total += y;
            return this;
        }

        subtract(y) {
            this.total -= y;
            return this;
        }

        divide(y) {
            this.total /= y;
            return this;
        }

        multiply(y) {
            this.total *= y;
            return this;
        }

        totalSum() {
            if(this.total === isNaN) return console.log('Only numbers accepted. No other symbols.');
            return this.total;
        }
}

    module.exports = Calculator;

            // class Calculator {
            //     constructor(add, divide, subtract, multiply){
    //         this.add = add;
    //         this.divide = divide;
    //         this.subtract = subtract;
    //         this.multiply = multiply;
    //         this.total = x;
    //     }

    //     add(y) {
    //         total += y;
    //         return this.total;
    //     }

    //     subtract(y) {
    //         total -= y;
    //         return this.total;
    //     }

    //     divide(y) {
    //         total /= y;
    //         return this.total;
    //     }

    //     multiply (y) {
    //         total *= y;
    //         return this.total;
    //     }

    //     totalSum(x) {
    //         return total(x);
    //     }
    // }