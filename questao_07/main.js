alert('Hoje irei verificar se um valor é uma potência de 2')
var valor = prompt('Qual seu valor a verificar?')
var noValor = parseInt(valor)
var valorPerf = false;

while (true) {
    if ((noValor % 2) != 0) {
        alert(`Seu valor não é uma potência de 2`)
        break
    }

    if (valorPerf) {
        valorPerf = noValor % 2 == 0;
        noValor = noValor % 2;
        if (noValor == 1) {
            valorPerf = true;
            break
        }
    }
}

if (valorPerf) {
    alert(`Seu valor é uma potência de 2`)
}