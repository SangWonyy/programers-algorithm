function solution(n)
{
    let sum = 0;
    String(n).split('').forEach((element) => {
        sum += +element;
    })
    return sum;
}
solution(123);
