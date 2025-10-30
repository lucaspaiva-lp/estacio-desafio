// Dividir um array em dois menores

function dividirArray(lista) {
    let metade = [];
    let resto = [];
    let auxLength = Number.parseInt(lista.length / 2);
    let auxLengthResto = (lista.length) - auxLength;

    resto = lista.slice(0, auxLength);

    metade = lista.slice(auxLength, lista.length);

    console.log(resto);
    console.log(metade);
}

let lista = [1, 2, 3, 4, 5];
let lista2 = [-1, -2, -3, 89];

dividirArray(lista);
dividirArray(lista2);
