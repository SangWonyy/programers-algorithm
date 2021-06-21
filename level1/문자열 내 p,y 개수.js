function solution(s){
    const split = s.split('');
    const yList = split.filter((y) => y.toLowerCase() === 'y');
    const pList = split.filter((p) => p.toLowerCase() === 'p');

    if (yList.length === 0 && pList.length === 0) return true;
    if (yList.length === pList.length) return true;

    return false;
}

solution("pPoooyY");

// 다른 사람 풀이
// function numPY(s){
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

