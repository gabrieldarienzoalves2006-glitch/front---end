// Questão 03 - Adicionar imagem dinamicamente
function mostrarTabela() {
    // Cria o elemento de imagem
    const img = document.createElement("img");
    
    // Define os atributos da imagem conforme descritivo (Caminho genérico da pasta Prova)
    img.src = "tabela_jogos.png"; 
    img.alt = "Tabela de Jogos Copa 2026";
    img.style.display = "block";
    img.style.margin = "20px auto";
    img.style.maxWidth = "100%";

    // Insere ao final da página
    document.body.appendChild(img);
}

function revelar() {
    // 1. Alterar a imagem do jogador
    const fotoJogador = document.querySelector(".img-principal"); // Ou o seletor ID usado no HTML
    fotoJogador.src = "img/_vinicius_junior.png";

    // 2. Selecionar os spans de informação
    const spanNome = document.getElementById("nome-completo");
    const spanNascimento = document.getElementById("data-nascimento");
    const spanAltura = document.getElementById("altura");
    const spanPosicao = document.getElementById("posicao");
    const spanRank = document.getElementById("rank");

    // 3. Substituir o conteúdo textual
    spanNome.innerText = "Vinícius José Paixão de Oliveira Júnior";
    spanNascimento.innerText = "12/07/2000 (25 anos)";
    spanAltura.innerText = "1,76 m";
    spanPosicao.innerText = "Ponta-esquerda / Atacante";
    spanRank.innerText = "9,5";

    // 4. Manipular as classes CSS
    // Seleciona todos os elementos que possuem a classe placeholder
    const elementosComPlaceholder = document.querySelectorAll(".placeholder");

    elementosComPlaceholder.forEach(el => {
        el.classList.remove("placeholder"); // Remove a classe antiga
        el.classList.add("card-text");      // Aplica a nova classe
    });
}