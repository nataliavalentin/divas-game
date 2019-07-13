let entrar = document.getElementById('entrarLogin')
let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let username = document.getElementById('username')
let senha = document.getElementById('senha')



entrar.addEventListener('onclick', () => {
    fetch('http://localhost:8785/divas/cadastro', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "username": username.value,
            "senha": senha.value


        },
        body: JSON.stringify({

        })
    })


    .then(function(response) {
            return response.json()
        })
        .then(function(data) {



        })
        .catch(function(erro) {
            console.log(erro)
        })
});