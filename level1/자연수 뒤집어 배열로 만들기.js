function solution(n) {
    let answer = [];
    const split = String(n).split('');

    for (let i = split.length - 1; i >= 0; i--) {
        answer.push(+split[i]);
    }
    return answer;
}

solution(123);
