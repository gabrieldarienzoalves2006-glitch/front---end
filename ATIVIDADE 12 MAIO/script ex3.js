function calcularMedia() {
    const nomeAluno = document.getElementById('nomeAluno').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = document.getElementById('resultado');

    if (media >= 7.0 && media <= 10.0) {
        resultado.innerHTML = `<p><strong>${nomeAluno}</strong> - Aprovado! Média: ${media.toFixed(2)}</p>`;
    } else if (media >= 4.0 && media < 7.0) {
        const falta = 10 - media;
        resultado.innerHTML = `<p><strong>${nomeAluno}</strong> - Em exame. Média: ${media.toFixed(2)}. Falta ${falta.toFixed(2)} para aprovação.</p>`;
    } else {
        resultado.innerHTML = `<p><strong>${nomeAluno}</strong> - Reprovado! Média: ${media.toFixed(2)}</p>`;
    }
}