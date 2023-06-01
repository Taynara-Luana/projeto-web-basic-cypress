const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');


function realizaLoginValido(){
    if(usuario.value === 'admin' & senha.value ==='123'){
        window.location = 'home.html'
    }else{
        alert('Usuário ou senha inválidos.')
    }
}

function mensagemPadrao(){
    alert('Essa funcionalidade ainda não está pronta!');
}