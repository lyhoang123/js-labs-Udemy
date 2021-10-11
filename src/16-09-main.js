// tim so trong khoang a->b
// using for...i
function createArrayInRangeV1(a, b) {
  if (a <= -100 || a > b || a >= 100) return undefined;

  const newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr;
}
console.log(createArrayInRangeV1(1, 9));
// using Array.from()
function createArrayInRangeV2(a, b) {
  if (a <= -100 || a > b || a >= 100) return undefined;

  return Array.from({ length: b - a + 1 / 1 }, (_, i) => a + i);
}

console.log(createArrayInRangeV2(1, 9));
