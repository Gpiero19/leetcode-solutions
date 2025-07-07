strs = ["act","pots","tops","cat","stop","hat"]

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        anagram = {}
        for (let element of strs){
            
        }
    }
}

// Solution

function groupAnagrams(strs) {
    var anagrams = {};

    for (let i in strs){
        let word = strs[i]

        let sorted = strs[i].sort()

        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word)
        }
        console.log(anagrams)
        console.log(sorted)


        // let word = element.split('').sort().join('')
        // anagrams.push(word)
        // anagrams.sort()
        // console.log(anagram)
    }
    // for (let i = 0; i < anagram.length(); i++) {
    //     for (let x = 1+ i; x < anagram.length(); x++) {
    //         if (anagram[i] === anagram [x]) {
    //             output.push(anagram[i])
    //             console.log(output)
    //         }
    //     }
    // }
}

groupAnagrams(strs)