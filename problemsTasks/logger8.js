/**
 * Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 }
 */

module.exports = (simpleFunction) => { 
    let counter = 0;
    const wrapper = () => {
        counter++;
        simpleFunction();
    };

    wrapper.report = () => console.log('totalCalls: ' + counter);
    return wrapper;
}