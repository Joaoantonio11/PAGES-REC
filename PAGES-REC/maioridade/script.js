function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultadoDiv = document.getElementById('resultado');
    const anoAtual = new Date().getFullYear();

    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual) {
        resultadoDiv.innerHTML = "Por favor, insira um ano de nascimento válido.";
        resultadoDiv.className = "";
        return;
    }

    const idade = anoAtual - anoNascimento;
    let status = "";
    let classe = "";

    if (idade >= 18) {
        status = "Maior de idade";
        classe = "maior-idade";
    } else {
        status = "Menor de idade";
        classe = "menor-idade";
    }

    resultadoDiv.innerHTML = `Idade calculada: <strong>${idade} anos</strong> <br> Status: <strong>${status}</strong>`;
    resultadoDiv.className = classe;
}