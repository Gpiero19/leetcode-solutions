// Brute Force approach
// function minEatingSpeed(piles, h) {
//     let speed = 1;
//     while (true) {
//         let totalTime = 0;
//         for (let pile of piles) {
//             totalTime += Math.ceil(pile / speed);
//         }

//         if (totalTime <= h) {
//             return speed;
//         }
//         speed++;
//     }
// }


// Binary search approach
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let totalTime = 0;

        for (let pile of piles) {
            totalTime += Math.ceil(pile / mid);
        }

        if (totalTime <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(minEatingSpeed([1, 4, 3, 2], 9)) 