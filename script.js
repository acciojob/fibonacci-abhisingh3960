function fibonacci(num) {
    let a = 0;
    let b = 1;
    let result;

    for (let i = 0; i < num; i++) {
        result = a;
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

module.exports = fibonacci;
