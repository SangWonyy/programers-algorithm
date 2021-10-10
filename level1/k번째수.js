function solution(array, commands) {
    const answer = [];

    for(const command of commands) {
        const [from, to, getIndex] = command;
        const sliceArray = array.slice(from - 1, to);
        sliceArray.sort((a,b) => a - b);

        answer.push(sliceArray[getIndex - 1]);
    }
    return answer;
}