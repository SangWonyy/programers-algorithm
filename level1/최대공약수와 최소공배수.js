function solution(n, m) {
    const [big, small] = n > m ? [n ,m] : [m, n];
    const gcd = big % small === 0 ? small : small % (big % small) === 0 ? big % small : 1;
    const lcm = big * small / gcd;
    return [gcd, lcm];
}

solution(25, 5);