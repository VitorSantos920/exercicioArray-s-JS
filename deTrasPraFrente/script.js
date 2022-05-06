debugger;
var resultado = "";
var valorDigitado = prompt("Digite o valor a ser invertido");
for (var posicao = (valorDigitado.length - 1); posicao >= 0; posicao--) {
    resultado += valorDigitado[posicao];
}

alert("Valor Invertido: " + resultado);