function calcularFatorial() {
    const valor = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');
    let valorResultado = 1;

    for (let i = 0; i < valor; i++) {
        valorResultado += valorResultado * i;
    }

    if (valor == 0){
        resultado.textContent = `O fatorial de ${valor} É ${1}`;
    }
    else if (valor == 2) {
        resultado.textContent = `O fatorial de ${valor} É ${4}`;
        return;
    } else {
        resultado.textContent = `O fatorial de ${valor} É ${valorResultado}`;
    }

}
