function solution(x) {
    const sum = String(x).split('').reduce((accumalate, value) => accumalate += Number(value), 0);
    console.log(String(x).split(''))
    return  x % sum === 0
}

solution(18);