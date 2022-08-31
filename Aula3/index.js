const Calculadora = require('./src/calculadora');

let soma = Calculadora.soma(2, 2);
let somaError = Calculadora.soma(true, 2);
let subtracao = Calculadora.subtracao(2, 2);
let subtracaoError = Calculadora.subtracao(true, 2);
let multiplicacao = Calculadora.multiplicação(2, 2);
let multiplicacaoError = Calculadora.multiplicação(true, 2);
let divisao = Calculadora.divisão(2, 2);
let divisaoError = Calculadora.divisão(true, 2);
let elevado = Calculadora.elevado(2, 2);
let elevadoError = Calculadora.elevado(true, 2);

console.log(soma);
console.log(somaError);
console.log(subtracao);
console.log(subtracaoError);
console.log(multiplicacao);
console.log(multiplicacaoError);
console.log(divisao);
console.log(divisaoError);
console.log(elevado);
console.log(elevadoError);