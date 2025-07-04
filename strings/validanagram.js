s = "racecar"; 
t = "carrace";

// Output: true


function isAnagram(s, t) {
    let letterCountS = {};
    let letterCountT = {};

    if (s.length != t.length) {
        console.log(false)
        return false
    } else {
        for (let letter of s) {
            letterCountS[letter] = (letterCountS[letter] || 0) + 1

        }
        for (let letter of t) {
            letterCountT[letter] = (letterCountT[letter] || 0) + 1
        }
    }
    return checkObjects(letterCountS,letterCountT)
    
    function checkObjects(obj1, obj2) {
        let keys1 = Object.keys(obj1)
        let keys2 = Object.keys(obj2)

        if (keys1.length != keys2.length) {
            return false
        }
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
        console.log(true)
        return true
    }
}

isAnagram(s,t)
