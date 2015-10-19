function getPrimeNumbers (from, to) {
    result = [];
    for (var i = from; i < to + 1; i++){
        if (i == 2) {result.push(i);}
        else {
            for (var j = 2; j < i; j++){
                if (i % j == 0) {
                    break;
                }
                if (j == i - 1) {result.push(i);}
            }
        }
    }
    return result;
}
console.log(getPrimeNumbers (1, 100));
