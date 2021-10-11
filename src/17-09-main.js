// Using loop from 2 to n - 1
function isPrimeV1(n) {
  if (n <= 1 || n >= 1000) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// Using loop from 2 to square root of n
function isPrimeV2(n) {
  if (n <= 1 || n >= 1000) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
