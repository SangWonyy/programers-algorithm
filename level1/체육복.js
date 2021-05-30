function solution(n, lost, reserve) {
    const realLost = lost.filter(a => !reserve.includes(a));
    let realReserve = reserve.filter(a => !lost.includes(a));

    const answer = n - realLost.filter(a => {
        const b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
    console.log("answer : ", answer);

}

solution(5, [2,4], [1,3,5]);
