function symmetricDifference(arr1: string[], arr2: string[]) {
    console.debug("🚀 ~ symmetricDifference ~ values:", arr1, arr2);


    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const unique = [];

    for (const number of arr1) {
        if (!set2.has(number)) {
            unique.push(number)
        }
    }

    for (const number of arr2) {
        if (!set1.has(number)) {
            // console.log('unique item', number);
            unique.push(number)
        }
    }

    return unique;


}

const result = symmetricDifference([1, 2, 3, 5, 6, 7], [2, 3, 4, 9]);
console.debug("🚀 ~ result:", result)

module.exports = symmetricDifference;
