function solution(n, m) {
    const [big, small] = n > m ? [n ,m] : [m, n];
    const gcd = getGcd(big, small);
    const lcm = big * small / gcd;
    return [gcd, lcm];
}

const getGcd = (n, m) => {
    while (n > 0) {
        const temp = n;
        n = m % n;
        m = temp;
    }

    return m;
}

solution(25, 5);