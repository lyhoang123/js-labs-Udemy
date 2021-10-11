//1.Convert hours to seconds
function converHoursToSeconds(hours){
    if(hours < 0) return -1;
    if(hours === 0) return 0;

    const SECONDS_FOR_HOURS = 3600;
    return hours*SECONDS_FOR_HOURS;
}

//2.Given 3 number, find max
function findMax(a, b, c){
    let max = a;

    if(b > max) max = b;
    if(c > max) max = c;
    return max;
}
console.log(findMax(3,4,5))
//3.Given 3 number, find max even numeber
function findMaxEven(a, b, c){
    let max = Number.NEGATIVE_INFINITY;

    if(a%2 ===0 && a > max) max = a;
    if(b%2 ===0 && b > max) max = b;
    if(c%2 ===0 && c > max) max = c;
    return max;
}
console.log(findMaxEven(5,6,7));