// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  if (n < 1 || n > 1000) return undefined;

  const newArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) newArr.push(i);
  }

  return newArr;
}
console.log(getDivisorListV1(10));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return undefined;

  return Array.from({ length: n / 1 }, (_, i) => 1 + i).filter(checkNumber);
}
  function checkNumber(n) {
    const newArr = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) newArr.push(i);
    }
  }
console.log(getDivisorListV2(10));
// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  if (n < 1 || n > 1000) return undefined;
}
