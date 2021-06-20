function solution(arr)
{
    let answer = [];
    let prevValue = -1;

    for (let value of arr) {
        if (prevValue === -1) {
            answer.push(value);
            prevValue = value;
            continue;
        }
        if (prevValue === value) continue;

        answer.push(value);
        prevValue = value;
    }

    console.log(answer);
    return answer;
}

solution([1,1,3,3,0,1,1]);


// 다른 사람 풀이
// wow

// function solution(arr) {
//     return arr.filter((val,index) => val != arr[index+1]);
// }
