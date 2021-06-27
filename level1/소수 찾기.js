function solution(n) {
    const nList = [];

    for (let i = 1; i <= n; i++) {
        nList.push(i);
    }

    for (let i = 1; i * i < n; i++) {
        if (nList[i]) {
            const num = nList[i];
            for (let z = num * num; z <= n; z += num) {
                nList[z - 1] = 0;
            }
        }

    }

    const result= nList.filter((num) => num);
    result.shift();
    return result.length;
}

solution(10);
