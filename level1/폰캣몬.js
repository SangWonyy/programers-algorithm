function solution(nums) {
    let answer = 0;
    const maxReturn = nums.length / 2;
    const uniqNums = nums.filter((num, index, numArray) => {
        const findIndex = numArray.findIndex((inner => inner === num));
        if (findIndex === index) {
            return num;
        }
    })

    if (uniqNums.length >= maxReturn) {
        answer = maxReturn;
        console.log('answer', answer);

        return maxReturn;
    }

    answer = uniqNums.length;
    console.log('answer', answer);
}

solution([3,1,2,3]);
