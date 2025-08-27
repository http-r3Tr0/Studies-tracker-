// let student = 30;
// student  += 3; // isto se chama augmented assignment operator, serve para não termos que declarar a varivel de novo atribuir a ela outro valor

// student++; //adiciona 1 para student
// student--; //remove 1 de student 

// let username; 

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("salve").innerHTML = `Hello ${username}!`
// }

// username = window.prompt("what's your username?")


// console.log(username)

const pi = 3.14159
let radius; 
let circunferencia; 

    // pi === 3.14 ? console.log("pi é 3.14") : console.log("oshi porra") isso é um operador ternário, se as leis da matematica estiverem certo deverá imprimir no console "pi é 3.14"

   document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    radius = Number(radius);
    circunferencia = 2 * pi * radius
    document.getElementById("result").textContent = `A circunferencia do Circulo de raio ${radius} cm é: ${circunferencia} cm`
   }

// document.getElementById
// window.alert(circunferencia)