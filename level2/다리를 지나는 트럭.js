function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    let bridge = new Array(bridge_length - 1).fill(0);
    let firstTruck = truck_weights.shift();
    bridge.push(firstTruck);
    let currentWeight = firstTruck;

    while(currentWeight) {
        currentWeight = currentWeight - bridge.shift();
        const nextTruck = truck_weights[0];

        if ((currentWeight + nextTruck) <= weight ) {
            bridge.push(nextTruck);
            truck_weights.shift();
            currentWeight += nextTruck;
        } else {
            bridge.push(0);
        }

        ++time;
    }


    console.log('time', time);
    return time;
}

solution(100, 100, [10]);
