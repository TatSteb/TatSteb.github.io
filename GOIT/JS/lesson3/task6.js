function pow(x, n) {
    if (n != 1) {
        return x * pow (x, n - 1);
    } else {
        return x;
    }
}

console.log(pow(3, 2));
console.log(pow(1, 100));
