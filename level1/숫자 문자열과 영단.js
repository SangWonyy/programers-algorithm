function solution(s) {
    let result = '';
    const enKey = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };

    const splitS = s.split('');
    let connectWord = '';

    for(const word of splitS) {
        if (!isNaN(+word)) {
            if (enKey[connectWord]) {
                result += enKey[connectWord]
            }
            result += word;
            connectWord = '';
            continue;
        }
        if (enKey[connectWord] === undefined) {
            connectWord += word;
        } else {
            result += enKey[connectWord];
            connectWord = word;
        }
    }

    if (enKey[connectWord] !== undefined) {
        result += enKey[connectWord];
    }
    return +result;
}


// 다른 사람 풀이

function solution2(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}