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
    document.getElementById("guess").disabled = false;
    document.getElementById("submitGuess").disabled = false;
}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const letra = palavraAtual[i];
        if (letrasAdivinhadas.includes(normalizarLetra(letra)) || letra === " ") {
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

function encerrarJogo() {
    document.getElementById("guess").disabled = true;
    document.getElementById("submitGuess").disabled = true;
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess");
    let letraAdivinhada = entradaAdivinhacao.value;

    letraAdivinhada = normalizarLetra(letraAdivinhada);

    if (letraAdivinhada.length === 1 && /^[a-z\s]$/.test(letraAdivinhada)) {
        if (!letrasAdivinhadas.includes(letraAdivinhada)) {
            letrasAdivinhadas.push(letraAdivinhada);

            if (!palavraAtual.split('').some(letra => normalizarLetra(letra) === letraAdivinhada)) {
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(tentativasRestantes);

            if (palavraAtual.split('').every(letra => letrasAdivinhadas.includes(normalizarLetra(letra)) || letra === " ")) {
                document.getElementById("status").textContent = "Você venceu!";
                encerrarJogo();

            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
                encerrarJogo();
            }
        
        }
    } else {
        alert("Por favor, insira uma letra válida.");
    }

    entradaAdivinhacao.value = "";
}

function normalizarLetra(letra) {
    return letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.addEventListener("DOMContentLoaded", iniciarJogo);

function checarEnter(event) {
    if (event.key === "Enter") {
        adivinharLetra();
    }
}
