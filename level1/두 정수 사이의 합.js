function solution(a, b) {
    let answer = 0;
    let temp = 0;
    if(a>b){
        temp = a;
        a = b;
        b = temp;
    }
    for(let i = a; i<=b;i++){
        answer += i;
    }

    return answer;
}

solution(3, 5);

// 다른 사람풀이
// function solution(a, b) {
// return (a+b)*(Math.abs(b-a)+1)/2;
// }
