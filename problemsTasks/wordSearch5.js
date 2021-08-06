/**
 * Create a function wordSearch(w) that searches to see whether a word w is present in
the given text variable. Please note it has to be a full word and case insensitive.
 */

module.exports = (text, word) => {
    if(typeof text !== 'string' || typeof word !== 'string') return 'It has to be a string.';

    const regex = new RegExp(`\\b${word}\\b`, "gi")
    return regex.test(text)
}