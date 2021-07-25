function solution(N, stages) {
    var answer = [];
    const failRatioList = [];

    for (let i = 1; i <= N; i++ ) {
        const lessList = stages.filter((stage) => stage <= i);
        failRatioList.push(lessList.length / stages.length);

        stages = stages.filter((stage) => stage > i);
    }

    const copyFail = [...failRatioList];
    failRatioList.sort(( a, b ) => b - a);

    for(const fail of failRatioList) {
        const findIndex = copyFail.findIndex((copy) => copy === fail);
        answer.push(findIndex + 1);
        copyFail[findIndex] = -1;

    }

    return answer;

}