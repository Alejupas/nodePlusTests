/**Create a function which takes an array and returns an array with all duplicates
removed. */
const noDuplicates = (arr) => {
   if (!Array.isArray(arr)) return 'It should only be an array.';

    const newArr = Array.from(new Set(arr))
    return newArr;

    // alternative way (as well can be filter method/prototype using indexof or can be reduce method/prototype)

    // pure function when original arr is not modified:
    // const uniqueArr = new Set(arr);
    // const newUniqueArr = [...uniqueArr]
    // return newUniqueArr
}

module.exports = noDuplicates;