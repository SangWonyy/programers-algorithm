function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => a-b);

    d.reduce((accumulate, current, i, array) => {
        accumulate += current;
        answer++;

        if (accumulate > budget) {
            array.splice(1);
            answer--;
            return;
        }

        return accumulate;
    }, 0)

    console.log(answer)
    return answer;
}

solution([1,3,2,5,4], 9);
