function solution(s) {
    const sort = s.split('').sort((a,b) => {
        if (a > b) return -1;
        if (a === b) return 0;
        if (a < b) return 1;
    });
    return sort.join('');
}

solution('Zbcdefg');
