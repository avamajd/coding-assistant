/**
 * Function to generate Fibonacci sequence up to n terms
 * @param n - number of terms to generate
 * @returns Array of Fibonacci numbers
 */
function fibonacci(n: number): number[] {
    const fib: number[] = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

// Example usage:
console.log(fibonacci(10));