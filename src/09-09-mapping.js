//v1
function mappingArray(arr, callbackFn){
    if(!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;
    let newArr = [];

    for(let i = 0 ; i < arr.length ; i++){
        newElement = callbackFn(arr[i],i);
        newArr.push(newElement);
    }
    console.log(arr);
    console.log(newArr);
    return newArr;
}
console.log(mappingArray([2,1,3,4],x => x+2));