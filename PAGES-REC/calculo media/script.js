function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2)) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos nas notas.";
        resultadoDiv.className = "";
        return;
    }

    const media = (nota1 + nota2) / 2;
    let status = "";
    let classe = "";

    if (media >= 7) {
        status = "Aprovado";
        classe = "aprovado";
    } else {
        status = "Reprovado";
        classe = "reprovado";
    }

    resultadoDiv.innerHTML = `Média Obtida: <strong>${media.toFixed(1)}</strong> <br> Status: <strong>${status}</strong>`;
    resultadoDiv.className = classe;
}