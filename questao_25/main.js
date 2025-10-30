let valorAleatorio = Math.floor((Math.random() * (101 - 1 + 1)) + 1)
alert('Hoje irei sortear de 0 a 100, advinhe qual é...')
alert('Preparado?')
let suposicao = prompt('Advinhe...')

if (parseInt(suposicao) == valorAleatorio) {
    alert(`Acertou! Parabéns! Sorteado ${valorAleatorio} é igual a suposição: ${suposicao}`)
} else {
    alert(`Infelizmente você errou! Sorteado: ${valorAleatorio} é diferente da suposição: ${suposicao}`)
}
