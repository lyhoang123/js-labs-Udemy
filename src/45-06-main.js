//1.Function to check if a number is odd/even
function checkOddOrEven(n){
    if( n % 2 === 0 )
        return true;
    return false;
}
console.log(checkOddOrEven(3))

//2.Function to check if number is divisible by 5
function checkDivisibleBy5(n){
    return (n%5===0)
}
console.log(checkDivisibleBy5(5))

//3.funtion to check if a number is perfect square
//n= a*a
function checkPerfectSquare(n){
    if(n <= 0 ) return false;

    const sqrtN = Math.trunc(Math.sqrt(n));
    return sqrtN * sqrtN === n;
}
console.log(checkPerfectSquare(15))
