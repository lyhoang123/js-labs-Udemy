//1.Get the ones of a number having 3 digits
function getTheOnesNumber(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}
console.log(getTheOnesNumber(213));
//2.Get the tens of a number having 3 digits
function getTheTensNumber(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 10) % 10;
}

console.log(getTheTensNumber(263));
//3.Get the hundreds of a number having 3 digits
function getTheHundredsNumber(n) {
    if (n.toString().length !== 3) return -1;
  
    return Math.trunc(n / 100);
}
console.log(getTheHundredsNumber(415));
//4.Sum all digits of a number having 3 digits
function sumDigits(n){
    if (n.toString().length !== 3) return -1;
    
    const ones = n % 10;
    const tens =  Math.trunc(n / 10) % 10;
    const hundreds = Math.trunc(n / 100);

    return ones + tens + hundreds;
}
console.log(sumDigits(123))