function randomNumber(n){
    //checking 
    if ( n <= 0 ) return -1;

    //processing
    return Math.round(Math.random() * n);
}

function randomNumberInRange(a , b){
    //checking
    if( a >= b ) return -1;
    //processing
    return Math.round(Math.random() * (b-a)+a);
}



