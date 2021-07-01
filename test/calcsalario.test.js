const CalcSalario = require('../lib/calcsalario')
const cs = new CalcSalario();

describe('Calculadora de Salários de Funcionários' , () => {
    
    test('cálculo de salário líquido de desenvolvedor com salário >= R$ 3.000,00' , () => {
        const funcionario = {
            nome: 'Joao das Couves',
            email: 'jdcouves@email.com',
            salarioBase: 3000.00,
            cargo: 'DESENVOLVEDOR'
        };
        expect(cs.calcularLiquido(funcionario)).toBe(2400.00);
    });
    test('cálculo de salário líquido de desenvolvedor com salário < R$ 3.000,00' , () => {
        const funcionario = {
            nome: 'Joao das Couves',
            email: 'jdcouves@email.com',
            salarioBase: 2500.00,
            cargo: 'DESENVOLVEDOR'
        };
        expect(cs.calcularLiquido(funcionario)).toBe(2250.00);
    });
});