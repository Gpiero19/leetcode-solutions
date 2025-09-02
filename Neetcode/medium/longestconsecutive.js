// function longestConsecutive(nums) { 
//     let res = 0;
//     const store = new Set(nums);

//     for (let num of nums) {
//         let streak = 0,
//             curr = num;
//         while (store.has(curr)) {
//             streak++;
//             curr++;
//         }
//         res = Math.max(res, streak);
//     }
//     return res;
// }

function longestConsecutive2(nums) {
    const numSet = new Set(nums)
    let longest = 0

    for (let num of numSet) {
        if (!numSet.has(nums-1)) {
            let lenght = 1;
            while (nunmSet.has(num + length)) {
                length++
            }
            longest = Math.max(longest,length)
        }
        return longest
    }
}