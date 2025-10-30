let num1 = Number.parseFloat(prompt("Digite o primeiro número:"));
let num2 = Number.parseFloat(prompt("Digite o segundo número:"));
let num3 = Number.parseFloat(prompt("Digite o terceiro número:"));

function somarMedia(a, b, c){
    return (a + b + c) / 3;
}

let resultadomedia = somarMedia(num1, num2, num3);
console.log("A média é:" + resultadomedia);