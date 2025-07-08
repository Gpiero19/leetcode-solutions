
function twoSum(nums, target) {
    let firstNumber = 0;
    // let positionArray = new [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

        if (nums[i] + nums[j] === target) {
            // console.log(nums[i], nums[j])
            return [i, j]
       }
       }
    }   
}

nums = [3,4,5,6]
// nums = [4,5,6]
target = 8

//Output: [0,1]
twoSum(nums, target)