/*
Enunciado:

Crea una función que devuelva si un número es par o impar.
El número lo escribe el usuario.

Muestra el resultado por pantalla.
*/

let num = 0;
let resultado = false;

do{
    num = parseInt(prompt("Escribe un número y te diré si es par o impar"));
}while(num <= 0)

function isPair(x){

    if(x % 2 == 0){
        return true;
    } else {
        return false;
    }
}

result = isPair(num);
let resultBox = document.querySelector(".result");
let message = "El número " + num + " es impar";

if(result === true){
    message = "El número " + num + " es par";

}
resultBox.textContent = message;