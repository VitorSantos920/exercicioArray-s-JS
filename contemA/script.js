var valores = [];

for (var index = 0; index < 10; index++) {
    var valor = prompt("Digite a frase/valor/palavra " + (index + 1));
    valores.push(valor);
}

for(index = 0; index < valores.length; index++){
    if(valores[index].toLocaleLowerCase().includes("a")){
        console.log(valores[index]);
    }
}