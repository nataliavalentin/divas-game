let entrar = document.getElementById('entrar');
let fundo = document.getElementById('fundo');
let fundo2 = document.getElementById('fundo2');
let fecharLogin = document.getElementById('fechar-login');
let fecharCadastro = document.getElementById('fechar-cadastro');
let cadastro = document.getElementById('cadastro');
let cadastrese = document.querySelector('.cadastrese');

entrar.addEventListener('click', () => {
    fundo.style.visibility = 'visible';
})

cadastro.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
})

fecharLogin.addEventListener('click', () => {
    fundo.style.visibility = 'hidden';
})

fecharCadastro.addEventListener('click', () => {
    fundo2.style.visibility = 'hidden';
})

cadastrese.addEventListener('click', () => {
    fundo2.style.visibility = 'visible';
    fundo.style.visibility = 'hidden';
})