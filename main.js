document.addEventListener('DOMContentLoaded', () => {

    const foto = document.querySelector('#avatar')
    const nome = document.querySelector('#name')
    const user = document.querySelector('#user')
    const repositorio = document.querySelector('#repositorio')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const links = document.querySelector('#links')

    fetch('https:/api.github.com/users/PedroDmMaia')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            foto.src = json.avatar_url
            nome.innerText = json.name
            user.innerText = json.login
            repositorio.innerText = json.public_repos
            seguindo.innerText = json.following
            seguidores.innerText = json.followers
            links.href = json.html_url
        })
})