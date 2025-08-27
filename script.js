let contador = 0;
const salvar = document.getElementById('salvar')
const relogio = document.getElementById('relogio')

const iniciar = document.getElementById('Iniciar')

iniciar.onclick = function() {
    contador++
    relogio.textContent = contador;
}

salvar.onclick = function(){

    contador = 0;
    relogio.textContent = contador;
}
