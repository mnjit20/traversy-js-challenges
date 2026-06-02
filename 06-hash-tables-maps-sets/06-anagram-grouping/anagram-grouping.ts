function anagramGrouping(values: string[]) {

    const anagramMap = new Map();

    values.forEach(word => {
        console.log(word);
        const sortedString = word.split('').sort().join('');

        if (anagramMap.has(sortedString)) {
            anagramMap.get(sortedString).push(word);
        } else {
            anagramMap.set(sortedString, [word])
        }

    });
    return Array.from(anagramMap.values());
    // return Array.from(anagramMap.values());

}


const result = anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
console.debug("🚀 ~ result:", result)



module.exports = anagramGrouping;
