function validar() {
    // Buscando o CPF no formulário
    var cpf = document.querySelector("#cpf").value;

    // Variável para fazer as multiplicações na estrutura de repetição
    var flagMultiplicacao = 10;

    // Variável onde serão alocados os resultados das mutiplicações
    var valoresMultiplicados = [];

    // Variável que afirmará que o CPF está válido;
    var valido = [false, false];

    // Resultado das multiplicações + somas
    var resultado = 0;

    // Multiplicando os valores e fazendo soma das multiplicações
    for(var i = 0; i < cpf.length - 2; i++) {
        valoresMultiplicados.push(cpf.charAt(i) * flagMultiplicacao);

        resultado += valoresMultiplicados[i];

        flagMultiplicacao--;
    }

    // Fazendo a continua e atribuindo o mod da conta por 11 para "resultado"
    resultado = (resultado * 10) % 11;
    
    // Fazendo as verificações e atribuindo valores à variável de validação
    if(resultado == 11 || resultado == 10) {
        resultado = 0;
        if(resultado == cpf.charAt(9)) {
            valido[0] = true;
        } else {
            valido[0] = false;
        }
    } else {
        if(resultado == cpf.charAt(9)) {
            valido[0] = true
        } else {
            valido[0] = false;
        }
    }

    // Alterando atributos para fazer o mesmo procedimento, para verificação do segundo dígito
    flagMultiplicacao = 11;
    resultado = 0;
    valoresMultiplicados = [];

    for(var i = 0; i < cpf.length - 1; i++) {
        valoresMultiplicados.push(cpf.charAt(i) * flagMultiplicacao);

        resultado += valoresMultiplicados[i];

        flagMultiplicacao--;
    }

    resultado = (resultado * 10) % 11;

    if(resultado == 11 || resultado == 10) {
        resultado = 0;
        if(resultado == cpf.charAt(10)) {
            valido[1] = true;
        } else {
            valido[1] = false;
        }
    } else {
        if(resultado == cpf.charAt(10)) {
            valido[1] = true;
        } else {
            valido[1] = false;
        }
    }

    // Fazendo um if para ver se está válido ou não e preencher no HTML
    if(valido[0] == true && valido[1] == true) {
        document.getElementById("resultado").innerHTML = "CPF válido!";
    } else {
        document.getElementById("resultado").innerHTML = "CPF inválido!";
    }

}