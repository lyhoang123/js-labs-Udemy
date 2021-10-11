function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return -1;

  return Math.ceil(passengersCount / 7);
}

console.log(getTaxiCount(10));

function getMaxDigit(n) {
  if (n < 0 || n > 1000) return -1;

  const ones = n % 10;
  const tens = Math.trunc(n / 10) % 10;
  const hundreds = Math.trunc(n / 100);

  let max = ones;
  if (tens > ones) max = tens;
  if (hundreds > tens) max = hundreds;

  return max;
}
console.log(getMaxDigit(10));

function getTaxiCount1(customer) {
  if (customer < 0) console.log('Deo co ai sao di');
  if (customer <= 4) console.log('1 xe 4 chỗ');
  else if (customer > 4) console.log('1 xe 7 chỗ');
  else {
    // groupCustmer = 4 customers
    let groupCustomer = customer / 7;
    let customerSurplus = customer % 7;
    groupCustomer = Math.floor(groupCustomer);
    if (customerSurplus <= 4) {
      console.log('Cần ' + groupCustomer + ' xe 7 chỗ và 1 xe 4 chỗ');
    } else {
      console.log('Cần ' + (groupCustomer + 1) + ' xe 7 chỗ');
    }
  }
}

console.log(getTaxiCount1(4));

function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return false;

  const ones = n % 10;
  const tens = Math.trunc(n / 10) % 10;
  const hundreds = Math.trunc(n / 100);

  if (n.toString().length === 1) return true;
  if (n.toString().length === 2) {
    if (ones === tens) return true;
  } else if (n.toString().length === 3) {
    if (ones === hundreds) return true;
  }
  return false;
}
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(2));
console.log(isSymmetricNumber(3));
console.log(isSymmetricNumber(4));
console.log(isSymmetricNumber(5));
console.log(isSymmetricNumber(6));
console.log(isSymmetricNumber(7));
console.log(isSymmetricNumber(8));
console.log(isSymmetricNumber(9));

function isEqual(obj1, obj2){
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if(keysObj1.length !== keysObj2.length)
    return false;
  for(let key in keysObj1){
    if(obj1[key] !== obj2[key])
      return false;
  }
  return true;
}
const obj1 = {
  name : 'khoa',
}
const obj2 = {
  name : 'Alice',
}
console.log(isEqual(obj1,obj2))