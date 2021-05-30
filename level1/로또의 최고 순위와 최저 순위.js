function solution(lottos, win_nums) {
    const zeroCnt = lottos.filter((lotto) => lotto === 0);
    let correctCnt = 0;
    let worst = 0;
    let best = 0;

    win_nums.forEach((num) => {
        const correct = lottos.find((lotto) => lotto === num);
        if (correct) {
            ++correctCnt;
        }
    })

    worst = win_nums.length - correctCnt + 1
    best = win_nums.length - (correctCnt + zeroCnt.length) + 1

    worst = win_nums.length + 1 === worst ? --worst : worst;
    best = win_nums.length + 1 === best ? --best : best;

    console.log('result', [best, worst]);
    return [best, worst];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
