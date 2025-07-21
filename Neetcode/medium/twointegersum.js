function twoSum(numbers, target) {
    l = 0
    r = numbers.length - 1

    while (l < r) {
        let sum = numbers[l] + numbers[r]

        if(sum === target) {
            return [l + 1, r + 1]
        } else if (sum < target){
            l++
        } else {
            r--
        }
    }
    return []
}


numbers = [1,2,3,4] 
target = 3

// Output: [1,2]

console.log(twoSum(numbers, target))