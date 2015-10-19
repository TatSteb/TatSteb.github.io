var IntNumber;
IntNumber = prompt('Enter any integer');
if (+IntNumber % 1 === 0){
    if (+IntNumber > 0){
        alert( 1 );
    } else if (+IntNumber < 0) {
        alert( -1 );
    } else {
        alert( 0 );
    }
}
else {
    alert( 'The number is not integer!' );
}

