// Par ou Impar?
// Destravando o poder do JavaScript com este exercício simples!

exibirResultado(5);
function exibirResultado(numero) {
    for (let i = 0; i < numero; i++) {
        if (i % 2 === 0) 
            console.log(i + " Par");
            else 
                console.log(i + " Impar");
    }
}

// Exibindo contagem de 0 a 10

exibirNumero(10);
function exibirNumero(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
