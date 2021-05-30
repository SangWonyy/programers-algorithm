function solution(board, moves) {
    let stackList = [];
    let exit = [];
    for(let i = board.length - 1 ; 0 <= i ; i--) {
        board[i].forEach((doll, index) => {
            if (stackList[index]) {
                if (doll !== 0) {
                    stackList[index].push(doll)
                }
            } else {
                if (doll !== 0) {
                    stackList[index] = [doll]
                }
            }
        });
    }

    let result = 0;
    moves.forEach((move) => {
        const popDoll = stackList[move - 1].pop();
        if (popDoll) {
            if (exit.length > 0) {
                if (popDoll === exit[exit.length - 1]) {
                    exit.pop();
                    result += 2;
                } else {
                    exit.push(popDoll);
                }
            } else {
                exit.push(popDoll);
            }
        }

    })

    console.log('result', result) ;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);
