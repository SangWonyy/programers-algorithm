function solution(absolutes, signs) {

    const answer = signs.reduce((accumulate, next, index) => {
        return accumulate += next ? absolutes[index] : -absolutes[index];
    }, 0);

    console.log('answer', answer);
    return answer;
}

solution([4,7,12], [true,false,true]);
