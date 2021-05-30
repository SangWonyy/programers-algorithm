function solution(clothes) {
    let answer = 1;
    const map = new Map();
    let clotheArray = [];

    for(const clothe of clothes) {
        // console.log(clothe[1])
        const getMap = map.get(clothe[1]);
        if (getMap) {
            map.set(clothe[1], getMap + 1)
        } else {
            map.set(clothe[1], 1)
        }
    }

    for(const [key, value] of map) {
        answer *= (value + 1);
    }
    console.log('answer', --answer)
    return --answer;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])
