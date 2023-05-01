function realizarLogin() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        window.location = "home.html";
    } else {
        alert("Usuário/senha inválidos.")
    }
}

function mensagemPadrao(){
    alert('A página que você está tentando acessar, ainda não está pronta, volte mais tarde.')
}