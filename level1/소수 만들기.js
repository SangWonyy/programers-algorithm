function solution(nums) {
    let result = 0;

    for (let first = 0; first <= nums.length - 3; first++) {
        for(let second = first + 1; second <= nums.length - 2; second++) {
            for(let third = second + 1; third <= nums.length - 1; third++) {
                const sum = nums[first] + nums[second] + nums[third];
                if (sum % 2 !== 0) {
                    if(primeNumber(sum)) {
                        ++result;
                    }
                }
            }
        }
    }

    console.log('result', result);
    return result;
}

function primeNumber(nums){
    for(let i=2; i*i<=nums; i++){
        if(nums % i === 0) return false
    }
    return true
}

solution([1,2,3,4]);
