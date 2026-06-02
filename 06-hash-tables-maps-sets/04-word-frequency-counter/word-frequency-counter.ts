const wordFrequencyCounter = (str: string) => {

    const words = str.toLocaleLowerCase().split(" ");
    console.debug("🚀 ~ wordFrequencyCounter ~ words:", words)
    const count = new Map();

    for (const word of words) {
        console.debug("🚀 ~ wordFrequencyCounter ~ word:", word)
        if (word === '') continue;

        if (count.has(word)) {
            count.set(word, count.get(word) + 1)
        } else {
            count.set(word, 1);
        }

    }

    console.debug("🚀 ~ wordFrequencyCounter ~ count:", count)
}


const result = wordFrequencyCounter(
    'The quick brown fox jumps over the lazy dog.'
);
console.debug("🚀 ~ result:", result)



// module.exports = wordFrequencyCounter;
