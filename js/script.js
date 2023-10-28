function mostra(el) {
    let display = document.getElementById(el).style.display;
    if(display == "block") {
        document.getElementById(el).style.display = 'none';
        document.getElementById(el).style.transition = '1s';

    } else {
        document.getElementById(el).style.display = 'block';
        document.getElementById(el).style.transition = '1s';
    }
}

const tela = document.getElementById('tela');
const regioes = document.getElementById('regioes');

tela.addEventListener('click', function(e) {
    if (e === tela.sergipe) {
        regioes.scrollIntoView({ behavior: 'smooth' });
    }
});

