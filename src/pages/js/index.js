function realizarLogin() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        alert("Login realizado com sucesso!")
    } else {
        alert("Usuário/senha inválidos.")
    }
}