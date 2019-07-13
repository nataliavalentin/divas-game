let entrarLoginUsername = document.querySelector('#entrarLoginUsername')
let username2 = document.getElementById('loginUsername')
let senha2 = document.getElementById('senhaUsername')



entrarLoginUsername.addEventListener('click', () => {
    fundo.style.display = 'none',
        event.preventDefault()
    fetch('http://localhost:8000/divas/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify({
            "username": username2.value,
            "senha": senha2.value
        })
    })


    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data)
    })

    .catch(function(erro) {
        console.log(erro)
    })
});