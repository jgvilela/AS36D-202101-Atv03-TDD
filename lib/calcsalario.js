class CalcSalario {

    calcularLiquido (funcionario) {
        switch (funcionario.cargo) {
            case 'DESENVOLVEDOR':
                if (funcionario.salarioBase >= 3000.00)
                    return funcionario.salarioBase * 0.8;
                return funcionario.salarioBase * 0.9;
            default:
                return -1;
        }
    }
}

module.exports = CalcSalario;