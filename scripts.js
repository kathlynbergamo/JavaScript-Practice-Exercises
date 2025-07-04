// Exercícios de JavaScript INICIANTE - <3

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

// Somador de dois números.Peça dois números com prompt() e exiba a soma deles com alert().

let numero1 = prompt("Digite o primeiro número:"); // prompt() abre uma caixinha de input no navegador 
let numero2 = prompt("Digite o segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let soma = numero1 + numero2;

alert("A soma dos dois números é: " + soma);

// Transformar Graus CELSIUS para FAHRENHEIT
let celsius = prompt("Digite a temperatura em graus Celsius:");
celsius = Number(celsius);
let fahrenheit = (celsius * 9/5) + 32;

alert(`${celsius}°C equivalem a ${fahrenheit}°F`);523
