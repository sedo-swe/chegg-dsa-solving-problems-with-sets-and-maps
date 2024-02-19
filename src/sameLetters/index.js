/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const wordsMap = new Map();
    for (let word of words) {
        let lower = word.toLowerCase();
        const noDup = new Set();
        for (let i=0; i<lower.length; i++) {
            noDup.add(lower.charAt(i));
        }
        const arr = [];
        for (let i of noDup.values()) {
            arr.push(i);
        }
        arr.sort();
        const key = arr.join('');
        if (wordsMap.has(key)) {
            const temp = wordsMap.get(key);
            if (!temp.includes(key)) {
                temp.push(lower);
                wordsMap.set(key, temp);
            }
        } else {
            wordsMap.set(key, [lower]);
        }
    }
    return wordsMap;
}

console.log(sameLetters(["pair", "per", "pole", "pear", "peer", "reap", "lope", "pool"]));
// console.log(sameLetters(["per", "peer"]));

module.exports = sameLetters;
