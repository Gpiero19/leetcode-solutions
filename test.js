function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    else {
        return fibonacci(n -1) + fibonacci(n -2);
    }
}

n = 10;
// fibonacci(5)
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i))
}
