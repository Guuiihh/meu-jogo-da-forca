let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraAtual = palavras[indiceAleatorio];
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    atualizarDisplayDoJogo();
    desenharBoneco(tentativasRestantes); 
}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];
        if (letrasAdivinhadas.includes(letra) || letra === " ") {
            palavraExibida += letra;
        } else {
            palavraExibida += "_";
        }
    }

    document.getElementById("palavra").textContent = palavraExibida;
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();

    if (letraAdivinhada.length === 1 && /^[a-záéíóúãõç\s]$/.test(letraAdivinhada)) {
        if (!letrasAdivinhadas.includes(letraAdivinhada)) {
            letrasAdivinhadas.push(letraAdivinhada);

            if (!palavraAtual.includes(letraAdivinhada)) {
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(tentativasRestantes);

            if (palavraAtual.split('').every(letra => letrasAdivinhadas.includes(letra) || letra === " ")) {
                document.getElementById("status").textContent = "Você venceu!";
                bloquearInput();
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
                bloquearInput();
            }
        }
    } else {
        alert("Por favor, insira uma letra válida.");
    }

    entradaAdivinhacao.value = "";
}

document.addEventListener("DOMContentLoaded", iniciarJogo);

function checarEnter(event) {
    if (event.key === "Enter") {
        adivinharLetra();
    }
}
