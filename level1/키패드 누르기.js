function solution(numbers, hand) {
    let answer = '';
    const leftNumber = [1, 4, 7];
    const rightNumber = [3, 6, 9];

    const left = {
        1 : [0, 3],
        4 : [0, 2],
        7 : [0, 1]
    };
    const right = {
        3 : [0, 3],
        6 : [0, 2],
        9 : [0, 1]
    };

    const middle = {
        2 : [1, 3],
        5 : [1, 2],
        8 : [1, 1],
        0 : [1, 0]
    };


    let currentPositionL = [0, 0];
    let currentPositionR = [0, 0];

    numbers.forEach((number) => {
        if (leftNumber.includes(number)) {
            answer += "L";
            currentPositionL = left[number];
        } else if (rightNumber.includes(number)) {
            answer += "R";
            currentPositionR = right[number];
        } else {
            const middleSum = middle[number][0] + middle[number][1];
            const leftSum = currentPositionL[0] + currentPositionL[1];
            const rightSum = currentPositionR[0] + currentPositionR[1];
            const leftMiddle = Math.abs(middleSum - leftSum);
            const rightMiddle = Math.abs(middleSum - rightSum);

            if (leftMiddle > rightMiddle) {
                answer += "R";
                currentPositionR = middle[number];

            } else if (leftMiddle < rightMiddle) {
                answer += "L";
                currentPositionL = middle[number];
            } else if (leftMiddle === rightMiddle) {
                if (hand === 'right') {
                    answer += "R";
                    currentPositionR = middle[number];
                } else {
                    answer += "L";
                    currentPositionL = middle[number];
                }
            }
        }
    })
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
