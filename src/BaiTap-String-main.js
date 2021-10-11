// using if...else
function formatSecondsV1(seconds) {
  if (seconds < 0 || seconds > 60) return '';
  if (seconds.toString().length === 1) return `0${seconds}`;
  return seconds.toString();
}

console.log(formatSecondsV1(20));
// using slice()
function formatSecondsV2(seconds) {
  if (seconds < 0 || seconds > 60) return '';
  if (seconds.toString().length === 1) return `0${seconds}`;
  return seconds.toString().slice(0, 2);
}

console.log(formatSecondsV2(9));

// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {}
console.log(formatTime(86400));

// using indexOf()
function isSecureUrlV1(url) {
  if (url === '') return false;

  if (url.toLowerCase().indexOf('https') !== -1 || url.toLowerCase().indexOf('wss') !== -1)
    return true;
  else return false;
}
console.log(isSecureUrlV1('   '));

// using startsWith()
function isSecureUrlV2(url) {
  if (url === '') return false;

  return url.toLowerCase().startsWith('https') || url.toLowerCase().startsWith('wss');
}
console.log(isSecureUrlV2('WSS://abc.com'));

// using split
function extractDomainV1(email) {
  if (email === '') return '';
  const emailFull = email.toLowerCase().split('@');
  return `@${emailFull[1]}`;
}
console.log(extractDomainV1('lyhoang20012000@gmail.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
  if (email === '') return '';

  return email.slice(email.toLowerCase().indexOf('@'));
}

console.log(extractDomainV2('lyhoang20012000@gmail.com'));

function getFullName(firstName, lastName) {
  const FullFirstName = `${firstName.trim()[0].toUpperCase()}${firstName
    .trim()
    .slice(1)
    .toLowerCase()}`;
  const FullLastName = `${lastName.trim()[0].toUpperCase()}${lastName
    .trim()
    .slice(1)
    .toLowerCase()}`;

  return `${FullFirstName} ${FullLastName}`;
}

console.log(getFullName('       john      ', '        phAm         '));

//Clone object no using spread operator and object.assgin()
function cloneObject(obj) {
  if (!obj) return '';

  const objectClone = {};
  for (let key in obj) {
    objectClone[key] = obj[key];
  }
  return objectClone;
}
function print(obj){
  for(let key in obj)
  {
    console.log(key, obj[key]);
  }
}

const studentA = { name: 'Bob ', math: 9 };
const studentB = cloneObject(studentA);
print(studentB);