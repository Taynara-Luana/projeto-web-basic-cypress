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
//Validação da mascara de telefone
const telefone = document.getElementById('telefone') // Seleciona o campo telefone do campo de telefone
telefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
telefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    telefone.value = valor // Insere o(s) valor(es) no campo
}
// Fim da Validação da mascara de telefone