function solution(n) {
    const sortString = String(n).split('').sort((a,b) => b-a);
    return +sortString.join('');
}

solution(44321);
