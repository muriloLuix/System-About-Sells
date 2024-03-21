function trocarImagem() {
    let imagem = document.getElementById('cardOne').getElementsByTagName('img')[0];
    
    if (imagem.src.includes("front-1.jpg")) {
        imagem.src = "assets/img/back-1.png";
    } else if (imagem.src.includes("back-1.png")) {
        imagem.src = "assets/img/front-1.jpg";
    }
}
