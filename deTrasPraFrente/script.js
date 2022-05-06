// 1ª Forma:
var resultado = "";
var valorDigitado = prompt("Digite o valor a ser invertido");
// for (var posicao = (valorDigitado.length - 1); posicao >= 0; posicao--) {
//     resultado += valorDigitado[posicao];
// }

// alert("Valor Invertido: " + resultado);

// 2ª Forma:

var letrasDoValorDigitado = Array.from(valorDigitado); // Retorna um Array (Armazenado na variável)
var letrasInvertidasDoValorDigitado = letrasDoValorDigitado.reverse(); // Método "reverse" inverte os valores de um Array, retornando outro array.
resultado = letrasInvertidasDoValorDigitado.join(""); // Método "join" adiciona todos os elementos em uma string, separados por separador específico.
alert(resultado);