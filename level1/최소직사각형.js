function solution(sizes) {
    const flatSizes = sizes.flat();
    const maxNumber = Math.max(...flatSizes);
    const maxPairList = sizes.filter((size) => size.includes(maxNumber));
    const maxPair = maxPairList.reduce((acc, next) => {
        if (acc[0] * acc[1] < next[0] * next[1] ) {
            acc = next;
            return acc;
        } else {
            return acc;
        }
    }, maxPairList[0]);
    maxPair.sort((a, b) => a - b);
    let secondNumber = maxPair[0];
    sizes.forEach((size) => {
        if (size === maxPair) return false;

        size.sort((a, b) => a - b);
        if (size[0] > secondNumber) {
            secondNumber = size[0];
        }
    });


    return maxNumber * secondNumber;
}