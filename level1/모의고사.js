function solution(answers) {
    const answerWayList = [[1,2,3,4,5] , [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    const answer = [];
    let correctCnt = [0, 0, 0];
    let answerIndex = 0;

    for (const [wayIndex, answerWay] of answerWayList.entries()) {
        answers.forEach((answer) => {
            if (answerIndex === answerWay.length) {
                answerIndex = 0;
            }
            if (answer === answerWay[answerIndex]) {
                ++correctCnt[wayIndex];
            }
            ++answerIndex;
        });
        answerIndex = 0;
    }

    const findMax = Math.max(...correctCnt);
    correctCnt.forEach((cnt, index) => {
        if (findMax === cnt ) {
            answer.push(index + 1);
        }
    })
    console.log('answer', answer);
}

solution([1,2,3,4,5]);
