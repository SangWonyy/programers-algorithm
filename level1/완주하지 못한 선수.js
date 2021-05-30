function solution(participant, completion) {
    let answer = '';
    const map = new Map();
    for (const person of completion) {
        if(map.get(person)) {
            map.set(person, map.get(person) + 1);
        } else {
            map.set(person, 1);
        }
    }

    for(const person of participant) {
        const personValue = map.get(person);
        if(personValue && personValue > 0) {
            map.set(person, personValue - 1);
        } else {
            answer = person;
            break;
        }
    }
    console.log('answer', answer);
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
