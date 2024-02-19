function intersection(a, b) {
    const setA = new Set(a);
    const setInter = new Set();

    for (let elem of b) {
        if (setA.has(elem))
            setInter.add(elem);
    }
    const inter = [];
    for (let i of setInter.values()) {
        inter.push(i);
    }
    return inter;
}

const a = ['A', 'B', 'C', 'A', 'D'];
const b = ['A', 'A', 'E', 'C', 'D'];
console.log(intersection(a, b));

module.exports = intersection;
