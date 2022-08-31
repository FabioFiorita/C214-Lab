const validate = require('validate.js');
const NumbersConstrains = require('./validate');


const Calculadora = {
    soma(a, b) {
        const validateA = validate({ a }, NumbersConstrains.numbersConstrains);
        const validateB = validate({ b }, NumbersConstrains.numbersConstrains);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let soma = a + b;
        return soma;
    },
    subtracao(a, b) {
        const validateA = validate({ a }, NumbersConstrains.numbersConstrains);
        const validateB = validate({ b }, NumbersConstrains.numbersConstrains);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let subtracao = a - b;
        return subtracao;
    },
    multiplicação(a, b) {
        const validateA = validate({ a }, NumbersConstrains.numbersConstrains);
        const validateB = validate({ b }, NumbersConstrains.numbersConstrains);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let multiplicacao = a * b;
        return multiplicacao;
    },
    divisão(a, b) {
        const validateA = validate({ a }, NumbersConstrains.numbersConstrains);
        const validateB = validate({ b }, NumbersConstrains.numbersConstrains);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let divisao = a / b;
        return divisao;
    },
    elevado(a, b) {
        const validateA = validate({ a }, NumbersConstrains.numbersConstrains);
        const validateB = validate({ b }, NumbersConstrains.numbersConstrains);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let elevado = Math.pow(a, b);
        return elevado;
    }
};

module.exports = Calculadora;