function isPalindrome (s) {
    let sClean = s.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
    let sInverse = sClean.split('').reverse().join('')

    return sInverse === sClean
}

s = "Was it a car or a cat I saw?"



console.log(isPalindrome(s))