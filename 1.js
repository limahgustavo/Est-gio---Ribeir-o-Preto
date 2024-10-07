function isFibonacci(num) {
    let a = 0;
    let b = 1;
    
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso:
const num = 21; 
console.log(isFibonacci(num));