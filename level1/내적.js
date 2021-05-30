function solution(a, b) {
    const result = a.reduce((accumulator, nextValue, index) => {
        return accumulator + (nextValue * b[index]);
    }, 0);

    console.log('result', result);
}

solution([1,2,3,4], [-3,-1,0,2]);
