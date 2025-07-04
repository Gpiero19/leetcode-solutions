class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {}
}

s = "Was it a car or a cat I saw?"

function isPalindrome(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    let reversed = cleaned.split("").reverse().join('')

    // console.log(cleaned)
    // console.log(reversed)

    return cleaned === reversed
}

isPalindrome(s)