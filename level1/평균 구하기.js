function solution(arr) {
    var answer = arr.reduce((accumulate, nextValue) => accumulate += nextValue) / arr.length;
    return answer;
}

solution([1,2,3,4]);