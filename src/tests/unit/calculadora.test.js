const { sumar, restar, multiplicar, dividir } = require('../../../src/calculadora/calculadora.js');
// 'describe' agrupa pruebas relacionadas, como una carpeta
describe('Calculadora Básica', () => {
//funcion suma
    describe('sumar()', () => {
        test('2 + 3 debe ser 5', () => {
            // ARRANGE
            const a = 2, b = 2;
            // ACT
            const resultadoSuma = sumar(a, b);
            // ASSERT
            expect(resultadoSuma).toBe(4);
        });
        test('sumar números negativos: -1 + -1 = -2', () => {
            expect(sumar(-1, -1)).toBe(-2);
        });
        test('sumar con cero: 5 + 0 = 5', () => {
            expect(sumar(5, 0)).toBe(5);
        });
    });
// función resta
    describe('restar()', () => {
        test('5 - 3 debe ser 2', () => {
            expect(restar(5, 3)).toBe(2);
        });
        test('restar números negativos: -5 - (-3) = -2', () => {
            expect(restar(-5, -3)).toBe(-2);
        });
        test('restar con cero: 5 - 0 = 5', () => {
            expect(restar(5, 0)).toBe(5);
        });
    });
// función multiplicación
    describe('multiplicar()', () => {
        test('4 * 3 debe ser 12', () => {
            expect(multiplicar(4, 3)).toBe(12);
        });
        test('multiplicar por cero debe ser 0', () => {
            expect(multiplicar(5, 0)).toBe(0);
        });
        test('multiplicar números negativos: -2 * 3 = -6', () => {
            expect(multiplicar(-2, 3)).toBe(-6);
        });
    });
//funsión dividir
    describe('dividir()', () => {
            test('10 / 2 debe ser 5', () => {
                expect(dividir(10, 2)).toBe(5);
            });
            test('dividir números negativos: -10 / 2 = -5', () => {
                expect(dividir(-10, 2)).toBe(-5);
            });
            test('dividir entre cero debe lanzar un error', () => {
                expect(() => dividir(10, 0))
                .toThrow('No se puede dividir entre cero');
            });
        });
    });