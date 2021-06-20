function solution(arr, divisor) {
    let answer = [];
    let result = arr.filter((value) => {
        if(value % divisor === 0) return true
    })
    result = result.sort((a,b) => {
        return a - b
    })
    answer = result.length > 0 ? result : [-1];

    console.log(answer);
    return answer;
}

solution([5, 9, 7, 10], 5);
