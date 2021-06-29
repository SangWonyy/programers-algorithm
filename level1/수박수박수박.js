function solution(n) {
    let answer = '';
    const rest = n % 2;
    const share = n / 2 | 0;

    answer += Array(share + 1).join('수박');
    if (rest === 1) answer += '수';
    return answer;
}

solution('수박수');
