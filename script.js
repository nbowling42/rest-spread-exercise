function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0)
};

function findMin(...nums) {
    return nums.reduce((min, num) => min < num ? min : num)
};

function mergeObjects(obj1, obj2) {
    return {
        ...obj1, ...obj2
    }
};

function doubleAndReturnArgs(arr, ...doubledArgs) {
    const doubled = doubledArgs.map((num) => num * 2);
    arr.push(...doubled);
    return arr;
};

function removeRandom(items) {
    const i = Math.floor((Math.random() * items.length));
    return [...items.slice(0, i), ...items.slice(i + 1)]
};

function extend(array1, array2) {
    return [...array1, ...array2];
};

function addKeyVal(obj, key, val) {
    return {
        ...obj,
        [key]: val
    }
};

function removeKey(obj, key) {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
};

function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
};

function update(obj, key, val) {
    return {
        ...obj,
        [key]: val
    }
};