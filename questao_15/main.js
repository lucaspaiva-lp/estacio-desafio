let apagando = false
function deletar(evento) {
    apagando = evento.key === 'Backspace' || evento.key === 'Delete';
}

function formatarNumero(evento) {
    let input = evento.target
    let numero = input.value
    const aviso = document.getElementById('aviso')
    if (apagando) {
        return;
    } else {
        transformar(numero, input)
    }
}

function transformar (numero, input) {
    if (numero.length == 1) {
        let aux = numero.split('')[0]
        input.value = `(${aux}`
    } else if (numero.length == 3) {
        input.value += ') '
    }else if (numero.length == 9) {
        input.value += '-'
    } else if (numero.length == 14) {
        aviso.textContent = 'O número está no formato certo!'
        correto = numero
    } else if (numero.length > 14) {
        let aux = input.value.split('').slice(0, 14).join('')
        input.value = aux
    }
}