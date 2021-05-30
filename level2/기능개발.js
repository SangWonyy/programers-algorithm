function solution(progresses, speeds) {
    let result = [];
    let index = 0;
    let prevDistribute;
    let accumalate = 1;

    while(progresses.length > 0) {
        const progress = progresses.shift();
        const speed = speeds.shift()
        const restDay = 100 - progress;
        const distributeDay = Math.ceil(restDay / speed);

        if( index > 0 ) {

            if(prevDistribute >= distributeDay) {
                ++accumalate;
            } else {
                result.push(accumalate);
                prevDistribute = distributeDay;
                accumalate = 1;
            }

            if(!progresses[0]) {
                result.push(accumalate);
                break;
            }
        } else {
            prevDistribute = distributeDay;
        }
        ++index;

    }

    console.log('result', result);
    return result;
}

solution([93, 30, 55], [1, 30, 5]);
