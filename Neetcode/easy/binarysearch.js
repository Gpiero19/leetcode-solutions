

function search(nums, target) {
    let arr = nums.sort((a,b) => a - b)
    let start = 0
    let end = nums.length-1
    return binary(arr,start,end)

    function binary(arr, start, end) {
        if (start > end) {
            return '-1'
        }

        const  middle = Math.floor( (start + end) / 2) 
        
        if(arr[middle] === target) {
            return middle
        }
        if(arr[middle] > target) {
            return binary(arr, start, middle - 1);
        }
        if(arr[middle] < target) {
            return binary(arr, middle + 1, end);
        }
    }
}



nums = [-1,0,1,2,4,6,8]
target = 4

// Output: 3

console.log(search(nums,target))
