

// Reset JavaScript

// Desativa o comportamento padrão do clique do botão direito do mouse
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Desativa a seleção de texto
document.addEventListener('selectstart', function (event) {
    event.preventDefault();
});

// Desativa o arrastar e soltar de elementos
document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

// Desativa a rotação da roda do mouse
document.addEventListener('wheel', function (event) {
    event.preventDefault();
});

// Desativa o comportamento padrão de toque e segure em dispositivos móveis
document.addEventListener('touchstart', function (event) {
    event.preventDefault();
});

window.addEventListener('orientationchange', function() {
    let content = document.getElementById('content');
    let rotateGif = document.querySelector('img.rotate-gif');
    let textGif = document.querySelector('p.rotate-text');

    if (window.orientation !== 0) {
        // Modo landscape
        if (!rotateGif) {
            rotateGif = document.createElement('img');
            rotateGif.src = '../assets/image/rotate.gif'; // Adiciona a imagem rotate.gif
            document.body.appendChild(rotateGif);
            rotateGif.classList.add('rotate-gif');
            rotateGif.style.display = 'block';
        }
        if (!textGif) {
            textGif = document.createElement('p');
            textGif.innerText = "Vire seu celular para o modo retrato";
            textGif.classList.add('rotate-text');
            document.body.appendChild(textGif);
        }
        content.style.display = 'none'; // Esconde o conteúdo
    } else {
        // Modo retrato
        content.style.display = ''; // Mostra o conteúdo
        if (rotateGif) {
            rotateGif.remove(); // Remove o gif rotate.gif se estiver presente
        }
        if (textGif) {
            textGif.remove(); // Remove o texto de orientação se estiver presente
        }
    }
});
