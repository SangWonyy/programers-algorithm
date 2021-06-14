function solution(n, arr1, arr2) {
    let answer = [];

    for(let i = 0; i < arr1.length; i++) {
        let binary1 = arr1[i].toString(2).split('');
        let binary2 = arr2[i].toString(2).split('');

        binary1 = checkLength(binary1, n);
        binary2 = checkLength(binary2, n);

        answer.push(makeSp(binary1, binary2));
    }
    console.log(answer);
    return answer;
}

const checkLength = (binary, n) => {
    if(binary.length < n) {
        const rest = n - binary.length;
        const zeroArray = new Array(rest).fill(0);
        binary.unshift(...zeroArray);
    }

    return binary;
};

const makeSp = (binary1, binary2) => {
    let sp = '';
    binary1.forEach((binary, index) => {
        const sum = +binary + +binary2[index];
        if (sum === 1 || sum === 2) {
            sp += '#';
        } else if (sum === 0) {
            sp += ' ';
        }
    });

    return sp;
}

solution(5, [9, 20, 28, 18, 11], 	[30, 1, 21, 17, 28]);


// 다른 사람풀이
// 놀랍다...
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }
//
// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }
