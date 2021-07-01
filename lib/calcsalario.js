class CalcSalario {

    calcularLiquido (funcionario) {
        if (funcionario.cargo = 'DESENVOLVEDOR') {
            if (funcionario.salarioBase >= 3000.00)
                return funcionario.salarioBase * 0.8;
            return funcionario.salarioBase * 0.9;
        }
    }
}

module.exports = CalcSalario;