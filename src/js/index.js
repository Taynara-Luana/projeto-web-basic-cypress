function validateField(){
    const email = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    if(!email  && !senha){
        document.getElementById('btnLogin').disabled = true;
    }else {
        document.getElementById('btnLogin').disabled = false;
    }
}

function realizarLogin() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        abrePaginaPrincipal()
    } else {
        alert("Usuário/senha inválidos.")
    }
}

function mensagemPadrao(){
    alert('A página que você está tentando acessar, ainda não está pronta, volte mais tarde.')
}