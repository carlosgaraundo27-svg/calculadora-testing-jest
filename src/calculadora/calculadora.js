// calculadora.js — Módulo de operaciones aritméticas
// Propósito: primer módulo para entender Jest
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
if (b === 0) {
throw new Error('No se puede dividir entre cero');
}
return a / b;
};
module.exports = { sumar, restar, multiplicar, dividir };