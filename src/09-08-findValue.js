//v1
function findValue(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) return arr[i];
  }
  return undefined;
}
console.log(findValue([2, 1, 3, 4], (a) => a > 2));
