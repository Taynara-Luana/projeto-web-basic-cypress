function realizarLogin() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        alert("Login realizado com sucesso!")
    } else {
        alert("Usuário/senha inválidos.")
    }
}

function mensagemPadrao(){
    alert('A página de esqueceu a sua senha, ainda não está pronta, volte mais tarde!')
}