var para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
    var nome = prompt('Insira um novo nome');
    para.textContent = 'Jogador 1: ' + nome;
}
function criarParagrafo() {
    var para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
}

var botoes = document.querySelectorAll('button');
for(var i = o; i < botoes.length ; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
}