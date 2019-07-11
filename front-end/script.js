let entrar = document.getElementById('entrar');
let fundo = document.getElementById('fundo');
let fundo2 = document.getElementById('fundo2');
let voltar = document.getElementById('botaoVoltar');
let cadastro = document.getElementById('cadastro');
let cadastrese = document.querySelector('.cadastrese');

entrar.addEventListener('click', () => {
    fundo.style.visibility = 'visible';
})

cadastro.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
})

voltar.addEventListener('click', () => {
    fundo2.style.display = 'none';
})

cadastrese.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
    fundo.style.visibility = 'hidden';
})