/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();

    for (let e of A) {
        numbers.set(e, 0);
    }
    for (let e of A) {
        let diff = N - e;
        if (diff != e) {
            if (numbers.has(diff)) {
                const t = [e, diff];
                t.sort();
                solution.set(t[0], t[1]);
            }
        }
    }
    const sol = [];
    for (let [k, v] of solution.entries()) {
        sol.push([k, v]);
    }
    return sol;
}

console.log(sumPairs([3, 2, 4, 6, 7, 5], 10));

module.exports = sumPairs;
