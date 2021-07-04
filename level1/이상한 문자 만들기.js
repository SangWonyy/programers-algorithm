function solution(s) {
    const split = s.split('');
    const changeWord = [];
    let index = 0;

    for (const word of split) {
        if (word === " ") {
            index = 0;
            changeWord.push(" ");
            continue;
        }
        if (index % 2 === 0) changeWord.push(word.toUpperCase());
        if (index % 2 !== 0) changeWord.push(word.toLowerCase());
        ++index;
    }

    return changeWord.join('');
}

solution('try catch');
