const form = document.getElementById('form');
const saldo = document.getElementById('saldo');
const saque = document.getElementById('saque');

function sacar(saldo,saque){
    return saldo > saque;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    let validarForm = sacar(saldo.value,saque.value)
    if(validarForm){
        alert('Saque realizado !');
    }else {
        alert('O valor de saque está acima do saldo !')
    }

})