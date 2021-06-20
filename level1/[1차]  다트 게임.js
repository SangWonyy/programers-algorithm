function solution(dartResult) {
    let answer = [[], [], []];
    let index = 0;
    let point = 0;
    let bonus = 0;
    let option = 0;
    const splitString = dartResult.split('');

    for (const [splitIndex, value] of splitString.entries()) {
        if (splitIndex > 0 && isNumber(splitString[splitIndex - 1])
            && isNumber(value)) {
            point = +(splitString[splitIndex - 1] + value);
            continue;
        }
        if (isNumber(value)) {
            if ((splitIndex > 0 && isBonus(splitString[splitIndex - 1]))) {
                const insertResult = insertAnswer(option, value, answer, index, point, bonus);
                answer = insertResult.answer;
                index = insertResult.index;
                point = +value;
                bonus = 0;
                option = 0;
                continue;
            }
            point = +value;
        } else if (isBonus(value)) {
            bonus = exChangeBonus(value);
        } else if (isOption(value)) {
            option = exChangeOption(value);
        }
        // 계산 조건 숫자(index !== 0), option

        if(isOption(value) || splitIndex === splitString.length - 1) {
            const insertResult = insertAnswer(option, value, answer, index, point, bonus);
            answer = insertResult.answer;
            index = insertResult.index;
            point = 0;
            bonus = 0;
            option = 0;
        }
    }
    console.log(answer);
    const result = answer.reduce((accumulation, nextValue) => accumulation += nextValue);
    console.log(result);
    return result;
}

const isNumber = (value) => {
    return !!(+value || +value === 0);
}

const isBonus = (value) => {
    return value.includes('S') || value.includes('D') || value.includes('T');
}

const exChangeBonus = (value) => {
    let bonus = 0;
    switch(value) {
        case 'S' :
            bonus = 1;
            break;
        case 'D' :
            bonus = 2;
            break;
        case 'T' :
            bonus = 3;
            break;
    }
    return bonus;
}

const isOption = (value) => {
    return value.includes('#') || value.includes('*');
}

const exChangeOption = (value) => {
    let option = 0;

    switch (value) {
        case '*' :
            option = 2;
            break;
        case '#' :
            option = -1;
            break;
    }

    return option;
}

const insertAnswer = (option, value, answer, index, point, bonus) => {
    option = isBonus(value) || isNumber(value) ? 1 : option;
    answer[index] = Math.pow(point, bonus) * option;
    if (index === 1 && value === '*') {
        answer[0] *= 2;
    }
    if (index === 2 && value === '*') {
        answer[1] *= 2;
    }
    ++index
    return {answer, index};
}

solution('1S2D*3T');
