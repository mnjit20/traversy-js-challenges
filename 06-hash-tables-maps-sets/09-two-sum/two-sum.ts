function twoSum(nums: number[], target: number) {

    const numSet = new Set;

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];
        console.debug("🚀 ~ twoSum ~ complement:", complement)


        if (numSet.has(complement)) {
            return [nums.indexOf(complement), i]
        }


        numSet.add(nums[i])
    }

    return [];

}


const result = twoSum([2, 7, 11, 15, 3, 10, 1, 16,], 19);

console.debug("🚀 ~ result:", Array.from(result.values()))



module.exports = twoSum;
