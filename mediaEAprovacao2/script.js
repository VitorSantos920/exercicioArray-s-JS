var qntdNotas = parseInt(prompt("Digite a quantidade de notas que necessite.")); 

var notas = []; // Iniciando array para armazenamento das notas

while (notas.length < qntdNotas) { // Enquanto o tamanho da array "notas" for menor que a quantidade de notas...
    var nota = parseFloat(prompt("Digite a nota.")); // Pedir para inserir uma nota
    notas.push(nota); // Enviar a nota à array notas.
}

var soma = 0.0; 
for (var indcNota = 0; indcNota < notas.length; indcNota++) { // Lendo a array "notas"
    soma += notas[indcNota]; // Somando seus valores e acumulando na variável "soma".
}

var media = soma / notas.length; // Realizando a média do total pela quantidade de notas.

alert("Sua média final foi: " + media);

// Condicional de aprovação
if (media >= 7) {
    alert("Parabéns, você está aprovado!");
} else{
    alert("Infelizmente você não atingiu a nota mínima, portanto está reprovado!");
}

