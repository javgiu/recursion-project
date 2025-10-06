// Fibonacci sequence generator

// Iterative implementation
function fibs(n) {
    let a = 0;
    let b = 1;
    let array = [];

    for (let i = 1; i <= n; i++) {
        if (i === 1) { 
            array.push(a);
        } else if (i === 2) { 
            array.push(b);
        } else {
            let c = a + b;
            array.push(c);
            a = b;
            b = c;
        }
    }
    return array;
}

// Recursive implementation
function fibsRec(n) {
    console.log("This is printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const array = fibsRec(n - 1);
    return [...array, array[array.length - 1] + array[array.length - 2]];
}

console.log(fibsRec(8));
console.log(fibs(8));