function Aumentar(numero, porcentagem) {
    let sum = (numero * porcentagem/100) + numero;
    return sum;
}

function Diminuir(numero, porcentagem) {
    let sum = numero - (numero * porcentagem/100);
    return sum;
}

console.log(Diminuir(358, 25));
console.log(Aumentar(358,25));