function solution(a, b) {
    let answer = '';
    let totalDay = 0;

    for(let i = 1; i < a; i++) {
        totalDay += totalDayFunc(i);
    }

    const restDay = (totalDay + b - 1) % 7;
    answer = transDay(restDay);
    return answer;
}

const totalDayFunc = (proviedMonth) => {
    const day29 = [2];
    const day30 = [4, 6, 9, 11];
    const day31 = [1, 3, 5, 7, 8, 10, 12];

    const is31 = day31.find((month) => month === proviedMonth);
    if (is31) return 31;

    const is30 = day30.find((month) => month === proviedMonth);
    if (is30) return 30;

    const is29 = day29.find((month) => month === proviedMonth);
    if (is29) return 29;

    return 'error';
}

const transDay = (day) => {
    let result;
    switch (day) {
        case 0:
            result = 'FRI';
            break;
        case 1:
            result = 'SAT';
            break;
        case 2:
            result = 'SUN';
            break;
        case 3:
            result = 'MON';
            break;
        case 4:
            result = 'TUE';
            break;
        case 5:
            result = 'WED';
            break;
        case 6:
            result = 'THU';
            break;
    }

    return result;
}

solution(5, 24);

// 다른 사람풀이
// date 객체를 통해 풀면 엄청 간단
// function getDayName(a,b){
//     return new Date(2016,a-1,b).toString().slice(0,3).toUpperCase();
// }
