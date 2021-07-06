function solution(arr) {
    let answer = [];
    if (arr.length > 1) {
        const minNumber = [...arr].sort((a, b) => a - b)[0];
        const findMinIndex = arr.indexOf(minNumber);
        arr.splice(findMinIndex, 1);

        answer = arr;
    } else {
        answer = [-1];
    }

    return answer;
}

solution([4,3,2,1]);
