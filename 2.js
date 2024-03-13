function estaEmFibonacci(numero) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < numero) {
        fibonacci.push(
            fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
        );
    }
    return fibonacci.includes(numero);
}

let numero = 22;
if (estaEmFibonacci(numero)) {
    console.log(`O número ${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não está na sequência de Fibonacci.`);
}
