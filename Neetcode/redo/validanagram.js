function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }

    sSorted = s.split('').sort().join()
    tSorted = t.split('').sort().join()
    return sSorted == tSorted
}


s="racecar"
t="carrace"

console.log(isAnagram(s,t))
