// @ts-nocheck
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }
    }
    return []
};

console.log(twoSum([12, 7, 2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));