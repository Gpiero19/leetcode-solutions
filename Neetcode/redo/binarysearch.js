function search(nums, target) {
    let start = 0
    let end = nums.length-1

    while (start <= end) {
        let mid = Math.floor((start+end)/2)
         
        // middle index matches the target
        if (target === nums[mid]) return mid

        //target is higher than middle index in array
        if (target > nums[mid]) {
            // we move the starting point to the middle + 1 index
            start = mid + 1
        } else {
            // we  move the end of the search to the middle - 1
            end = mid - 1
        }
    }
    return -1

}


// nums = [-1,0,2,4,6,8]
nums=[-1,0,3,5,9,12]
// nums = [5]
target = 0

console.log(search(nums,target))
