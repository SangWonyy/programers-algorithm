function solution(s) {
    let answer = '';
    const splitArray = s.split('');
    const share = splitArray.length / 2 | 0;

    answer = splitArray.length % 2 === 0 ? splitArray[share - 1]: '';
    answer += splitArray[share];
    console.log(answer);
    return answer;
}

solution("abcde");

