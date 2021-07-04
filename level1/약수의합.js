function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        const share = n / i | 0;
        const rest = n % i;

        if ( share < i ) break;

        if ( share === i && rest === 0) {
            answer += share;
            break;
        }

        if ( rest === 0 ) answer += share + i;
    }
    return answer;
}

solution(12);
