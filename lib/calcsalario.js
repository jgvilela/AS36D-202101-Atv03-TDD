class CalcSalario {

    calcularLiquido (funcionario) {
        switch (funcionario.cargo) {
            case 'DESENVOLVEDOR':
                if (funcionario.salarioBase >= 3000.00)
                    return funcionario.salarioBase * 0.8;
                return funcionario.salarioBase * 0.9;
            case 'DBA':
                if (funcionario.salarioBase >= 2000.00)
                    return funcionario.salarioBase * 0.75;
                return funcionario.salarioBase * 0.85;
            case 'TESTADOR':
                if (funcionario.salarioBase >= 2000.00)
                    return funcionario.salarioBase * 0.75;
                return funcionario.salarioBase * 0.85;
            default:
                return -1;
        }
    }
}

module.exports = CalcSalario;