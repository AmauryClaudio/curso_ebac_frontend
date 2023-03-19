const form = document.getElementById('form-dados');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorUm = document.getElementById('valor-um');
    const valorDois = document.getElementById('valor-dois');
    const mensagemSucesso = "O formulário é válido";

    if (valorUm.value < valorDois.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorUm.value = '';
        valorDois.value = ''; 
    } 
    
        else {
            document.querySelector('.error-message').style.display = 'block';
        }
})

console.log(form);