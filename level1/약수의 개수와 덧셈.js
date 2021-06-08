function solution(left, right) {
    try {
        let answer = 0;

        for(let i = left; i <= right; i++) {
            const divisorResult = divisor(i);
            if(divisorResult.isEven) {
                answer += divisorResult.number;
            } else {
                answer -= divisorResult.number;
            }
        }
        console.log(answer)
        return answer;
    } catch (e) {
        console.error(e);
    }

}

const divisor = (number) => {
    let cnt = 0;
    for(let i = 1; i <= number; i++) {
        if (number % i === 0) {
            ++cnt;
        }
    }

    const isEven = cnt % 2 === 0;
    return {number, isEven};
}

solution(13, 17);

// 다른 사람 풀이
function solution2(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근이 정수이면 약수의 갯수 홀수
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
