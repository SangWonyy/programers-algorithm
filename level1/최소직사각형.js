function solution(sizes) {
    const flatSize = sizes.flat();
    const maxNumber = Math.max(...flatSize);
    const includeMaxNumberList = sizes.filter((size) => size.includes(maxNumber));
    const flatMaxNumberList = includeMaxNumberList.flat();
    flatMaxNumberList.sort((a,b) => b - a);
    const maxPairNumber = flatMaxNumberList[includeMaxNumberList.length];
    flatSize.sort((a, b) => a - b);
    const secondNumber = flatSize.find((size) => {
        if (size >= maxPairNumber) return true;
    })

    console.log(flatSize)
    return maxNumber * secondNumber;
}