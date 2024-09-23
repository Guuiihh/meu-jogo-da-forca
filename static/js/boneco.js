function desenharBoneco(tentativasRestantes) {
    const forca = document.getElementById("forca");

    if (!forca) {
        console.error("Elemento com o ID 'forca' não foi encontrado.");
        return;
    }

    forca.innerHTML = "";

    // Poste (palo)
    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "0px";
    palo.style.left = "0%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "200px";
    palo.style.backgroundColor = "black";
    forca.appendChild(palo);

    // Travessa horizontal
    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.bottom = "198px"; 
    travessa.style.left = "25%";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "100px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "black";
    forca.appendChild(travessa);
    
    const travessaHorizontall = document.createElement("div");
    travessaHorizontall.style.position = "absolute";
    travessaHorizontall.style.bottom = "0px"; 
    travessaHorizontall.style.left = "2%";
    travessaHorizontall.style.transform = "translateX(-50%)";
    travessaHorizontall.style.width = "100px";
    travessaHorizontall.style.height = "2px";
    travessaHorizontall.style.backgroundColor = "black";
    forca.appendChild(travessaHorizontall);

    // Travessa vertical superior
    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.bottom = "149px"; 
    travessaSuperior.style.left = "calc(24% + 50px)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "50px";
    travessaSuperior.style.backgroundColor = "black";
    forca.appendChild(travessaSuperior);

    // Cabeça
    if (tentativasRestantes <= 5) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.bottom = "110px"; 
        cabeca.style.left = "50%";
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "40px"; 
        cabeca.style.height = "40px"; 
        cabeca.style.border = "2px solid black";
        cabeca.style.borderRadius = "50%";
        forca.appendChild(cabeca);
    }

    // Corpo
    if (tentativasRestantes <= 4) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.bottom = "50px"; 
        corpo.style.left = "50%";
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "2px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "black";
        forca.appendChild(corpo);
    }

    // Braço esquerdo
    if (tentativasRestantes <= 3) {
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.bottom = "90px"; 
        bracoEsquerdo.style.left = "50%";
        bracoEsquerdo.style.transform = "translateX(-25px) rotate(-45deg)";
        bracoEsquerdo.style.width = "30px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "black";
        forca.appendChild(bracoEsquerdo);
    }

    // Braço direito
    if (tentativasRestantes <= 2) {
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.bottom = "90px";
        bracoDireito.style.left = "35%";
        bracoDireito.style.transform = "translateX(25px) rotate(45deg)";
        bracoDireito.style.width = "30px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "black";
        forca.appendChild(bracoDireito);
    }

    // Perna esquerda
    if (tentativasRestantes <= 1) {
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.bottom = "40px"; 
        pernaEsquerda.style.left = "50%";
        pernaEsquerda.style.transform = "translateX(-25px) rotate(-45deg)";
        pernaEsquerda.style.width = "30px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "black";
        forca.appendChild(pernaEsquerda);
    }

    // Perna direita
    if (tentativasRestantes <= 0) {
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.bottom = "40px";
        pernaDireita.style.left = "35%";
        pernaDireita.style.transform = "translateX(25px) rotate(45deg)";
        pernaDireita.style.width = "30px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "black";
        forca.appendChild(pernaDireita);
    }
}
