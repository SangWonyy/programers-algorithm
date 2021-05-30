function solution(priorities, location) {
    let answer = 0;
    let maxNum = Math.max(...priorities);
    let priorityLength = priorities.length;
    while(true) {
        const getPriority = priorities.shift();
        if (getPriority < maxNum) {
            priorities.push(getPriority);
            (location > 0 ) ? --location : location = priorities.length - 1;
        } else {
            if(location === 0) {
                answer = priorityLength - priorities.length;
                break;
            } else {
                maxNum = Math.max(...priorities);
                --location;
            }
        }
    }

    console.log('answer', answer);
    return answer;
}

solution([2, 1, 3, 2], 2);
