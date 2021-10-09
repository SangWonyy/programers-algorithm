function solution(numbers) {
    const numberArray = [0,1,2,3,4,5,6,7,8,9];
    const restArray = numberArray.filter((number) => !numbers.includes(number))
    const sum = restArray.reduce((acc, next) => acc += next)


    return sum;
}