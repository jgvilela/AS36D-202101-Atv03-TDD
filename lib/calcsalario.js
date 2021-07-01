class CalcSalario {

    calcularLiquido (funcionario) {
        switch (funcionario.cargo) {
            case 'DESENVOLVEDOR':
                return funcionario.salarioBase * (funcionario.salarioBase >= 3000.00 ? 0.8 : 0.9);
            case 'DBA':
                return funcionario.salarioBase * (funcionario.salarioBase >= 2000.00 ? 0.75 : 0.85);   
            case 'TESTADOR':
                return funcionario.salarioBase * (funcionario.salarioBase >= 2000.00 ? 0.75 : 0.85);
            default:
                return -1;
        }
    }
}

module.exports = CalcSalario;