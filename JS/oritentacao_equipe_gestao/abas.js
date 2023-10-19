
// Seleciona o botão e o conteúdo
var botaoMostrarOcultar = document.getElementById('botaoMostrarOcultarZero');
var conteudo = document.getElementById('conteudo');

// Adiciona um evento de clique ao botão
botaoMostrarOcultar.addEventListener('click', function () {
    // Verifica o estado atual do conteúdo
    if (conteudo.style.display === 'block') {
        // Se estiver oculto, mostra
        conteudo.style.display = 'none';
    } else {
        // Se estiver visível, oculta
        conteudo.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tituloBotao = document.getElementById('botaoMostrarOcultarZero');
    let clicado = false;

    tituloBotao.addEventListener('click', function () {
        if (clicado) {
            tituloBotao.style.backgroundColor = '#FFC276';
        } else {
            tituloBotao.style.backgroundColor = '#fae3c8';
        }

        clicado = !clicado;
    });
});


function mudarImagem() {
    var imagem = document.getElementById("imagemum");
    if (imagem.src.endsWith("botaoum.png")) {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaoumversaodois.png"; // Mude o caminho para a segunda imagem
        texto.style.display = "block";
    } else {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaoum.png"; // Mude o caminho para a primeira imagem
        texto.style.display = "none";
    }
}

function mudarImagemdois() {
    var imagem = document.getElementById("imagemdois");
    if (imagem.src.endsWith("botaodois.png")) {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaodoisversaodois.png"; // Mude o caminho para a segunda imagem
        texto.style.display = "block";

    } else {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaodois.png"; // Mude o caminho para a primeira imagem
        texto.style.display = "none";

    }
}

function mudarImagemtres() {
    var imagem = document.getElementById("imagemtres");
    if (imagem.src.endsWith("botaotres.png")) {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaotresversaodois.png"; // Mude o caminho para a segunda imagem
        texto.style.display = "block";

    } else {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaotres.png"; // Mude o caminho para a primeira imagem
        texto.style.display = "none";

    }
}

function mudarImagemquatro() {
    var imagem = document.getElementById("imagemquatro");
    if (imagem.src.endsWith("botaoquatro.png")) {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaoquatroversaodois.png"; // Mude o caminho para a segunda imagem
        texto.style.display = "block";

    } else {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaoquatro.png"; // Mude o caminho para a primeira imagem
        texto.style.display = "none";

    }
}

function mudarImagemcinco() {
    var imagem = document.getElementById("imagemcinco");
    if (imagem.src.endsWith("botaocinco.png")) {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaocincoversaodois.png"; // Mude o caminho para a segunda imagem
        texto.style.display = "block";

    } else {
        imagem.src = "/Assets/oritentacao_equipe_gestao/botaocinco.png"; // Mude o caminho para a primeira imagem
        texto.style.display = "none";

    }
} 