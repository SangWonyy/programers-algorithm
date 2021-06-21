function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        } else {
            return -1;
        }
    })
}

solution(["abce", "abcd", "cdx"], 2);


// 다른 사람풀이

//function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    // return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
//}
