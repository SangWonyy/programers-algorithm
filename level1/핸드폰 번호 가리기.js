function solution(phone_number) {
    let answer = '';
    const split = phone_number.split('');
    const startPosition = split.length - 5;

    split.forEach((number, index) => {
        answer += index <= startPosition ? '*' : number;
    })
    return answer;

}

// 다른 사람 코드

// function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     //함수를 완성해주세요
//
//     return result;
// }