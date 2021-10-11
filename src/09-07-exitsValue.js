//v1
function every(arr) {
    if (!Array.isArray(arr)) return false;
    
    for ( let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2 !== 0) return false;
    }
    return true;
  }

console.log(every([2,4,8,6]));
//v2
function every(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return false;
  
  for ( let i = 0 ; i < arr.length ; i++){
      if(callbackFn(arr[i],i)) return false;
  }
  return true;
}

function handleCallBack(a){
    return a%2!==0;
}
console.log(every([2,6,8,4],handleCallBack));