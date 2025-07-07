function hasDuplicate(nums) {
    let addedNum = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (addedNum.has(nums[i])) {
            return true
        } else {
            addedNum.add(nums[i])
        }
    }
    console.log(addedNum)
    console.log(false)
    return false
}

nums=[1,2,3,3]

hasDuplicate(nums)