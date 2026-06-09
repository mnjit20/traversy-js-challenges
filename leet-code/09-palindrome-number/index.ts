// @ts-nocheck

function isPalindrome(x: number): boolean {
    const numberSt = x.toString();
    const reverse = numberSt.split('').reverse().join('');
    return reverse === numberSt;
};


console.log(isPalindrome(1214));

console.log(isPalindrome(-121));

// console.log(isPalindrome(99121111));