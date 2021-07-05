function solution(n) {
    const sqrt = Math.sqrt(n);
    const isInteger = Number.isInteger(sqrt);

    return isInteger ? Math.pow(sqrt + 1, 2) : -1;
}

solution(121);
