function solution(n) {
    let answer = 0;
    const ternary = [];
    if (n < 3) {
        console.log(n)
        answer = n;
    } else {
        while(true) {
            ternary.unshift(n % 3);
            n = Math.floor(n / 3);
            if (n < 3) {
                ternary.unshift(n);
                break;
            };
        }
        answer = ternary.reduce((accumulate, nextValue, index) => {
            return accumulate += Math.pow(3, index) * nextValue;
        }, 0);
    }

    console.log(answer);
    return answer;
}

solution(45);


// 다른 사람 코드
function solution2(n){
    return parseInt(n.toString(3).split("").reverse().join(''), 3)
}
