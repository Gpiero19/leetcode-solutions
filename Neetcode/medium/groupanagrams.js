function groupAnagrams(strs) {
    anagrams = {}
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = []
        }
        anagrams[sortedStr].push(str)
    }
    return Object.values(anagrams)


    /* Hashing */
    // let anagrams = []
    // let group = []
    // for (let str of strs) {
    //     sortedStr = str.split("").sort().join("")
    //     if (anagrams[group] !== null) {
    //         group.push(sortedStr)
    //     }
    // }
}

const strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(groupAnagrams(strs))