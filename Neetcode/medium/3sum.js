function threeSum (nums) {
    let res = new Set()
    nums.sort((a, b) => a - b)

    for (let x = 0; x < nums.length; x++) {
        for (let i = x + 1; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ((nums[x] + nums[i] + nums[j] === 0)) {
                    res.add(JSON.stringify([nums[x], nums[i], nums[j]]))
                }
            }
        }    
    }
    // console.log(res)
    return Array.from(res).map(item => JSON.parse(item))
    
}



nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums))