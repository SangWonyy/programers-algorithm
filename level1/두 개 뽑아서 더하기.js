function solution(numbers) {
    let answer = [];
    let isContinue = true;
    let index = 1;

    while(isContinue) {
        for(let i = index; i < numbers.length; i++) {
            answer.push(numbers[index-1] + numbers[i]);
        }
        ++index;
        if (index === numbers.length) {
            isContinue = false;
        }
    }

    const set = new Set(answer);
    const uniqueAnswer = [...set];
    console.log(uniqueAnswer.sort((a, b) => a - b))
    return uniqueAnswer.sort((a, b) => a - b);
}

solution([2,1,3,4,1]);
