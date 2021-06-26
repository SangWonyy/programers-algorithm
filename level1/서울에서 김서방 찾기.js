function solution(seoul) {
    const position = seoul.findIndex((people) => people === 'Kim');
    return '김서방은 ' + position + '에 있다';
}

solution(['Queen', 'Kim']);
