
const randomizeIndex = (count) => {
    return Math.floor(count * Math.random());
};

const randomizeElements = (array, count) => {
    if (count > array.length) {
        throw new Error('Array size cannot be smaller than expected random numbers count.');
    }
    const result = [];
    const guardian = new Set();
    while (result.length < count) {
        const index = randomizeIndex(array.length);
        const element = array[index];
        if (guardian.has(element)) {
            continue;
        }
        guardian.add(element);
        result.push(element);
    }
    return result;
};


// Usage example:

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const element = randomizeElements(array, 3);

console.log(element);  // Example output: [ 9, 6, 3 ]