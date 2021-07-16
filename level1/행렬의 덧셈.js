function solution(arr1, arr2) {
    const answer = [];

    for (let i = 0; i < arr1.length; i++ ) {
        const sumList = [];
        for(let z = 0; z < arr1[i].length; z++) {
            sumList.push(arr1[i][z] + arr2[i][z]);
        }
        answer.push(sumList);
    }
    console.log(answer)

    return answer;
}

solution([[1,2], [2,3]], [[3,4], [5,6]]);

// 다른 사람코드
// return A.map((a,i) => a.map((b, j) => b + B[i][j]));