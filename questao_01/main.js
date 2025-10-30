let l = ['hvuyv', 'uhvuhv', 'yfgcyg']
function extrairDomain() {
    const email = document.getElementById('email').value
    const resultado = document.getElementById('resultado')
    let aux;

    if (!email.trim().split('').includes('@')) {
        resultado.textContent = 'Não é possível extrair domínio.'
        return;
    }

    aux = email.trim().split('@')[1]

    resultado.textContent = aux
}