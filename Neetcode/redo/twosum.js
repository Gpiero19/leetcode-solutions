
function twoSum(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }
        prevMap.set(nums[i], i);
    }
    console.log(prevMap)
    return [];
}


nums = [3,4,5,6]
// nums = [4,5,6]
target = 8

//Output: [0,1]
twoSum(nums, target)