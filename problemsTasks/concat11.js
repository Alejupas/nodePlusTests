/**
 * Write the definition of the function "say" in such way that calling this:
say("Hello,")("it’s me"); //Would return "Hello, it’s me";
 */

module.exports = (textString) => { 
    if (typeof textString === 'string') {
        return (textString2) => typeof textString2 === 'string' ?  `${textString} ${textString2}` : 'Its not a string.'
    }
}