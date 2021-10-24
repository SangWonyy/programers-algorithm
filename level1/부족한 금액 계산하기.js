function solution(price, money, count) {
    let answer = 0;
    const useCount = new Array(count);
    const prefixPrice = price;
    let totalCount = 1;

    for (let i = 1; i <= useCount.length; i++) {
        const someTimes = prefixPrice * i;
        totalCount += someTimes;
    }
    console.log(totalCount)
    if (totalCount > money) {
        answer = totalCount - money;
    }

    return answer;
}

// 다른 사람 코드..
function solution2(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}