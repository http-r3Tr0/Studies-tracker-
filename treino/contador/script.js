// criar uma constante para cada um dos botões, assosiando eles a um dos botões do html por meio do id 
// criar let count para acompanhar a contagem, adicionar uma função que aumenta e diminui o contador 
let conta = 0;
const aumentar = document.getElementById('aumenBtn')
const diminuir = document.getElementById('diminBtn')
const resetar = document.getElementById('resetBtn')
const display = document.getElementById('contador')



aumentar.onclick = function(){
    conta++;
    display.textContent = conta;
}

resetar.onclick = function(){
    conta = 0;
    display.textContent = conta;
}

diminuir.onclick = function(){
    conta--;
    display.textContent = conta;
}