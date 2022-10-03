var valor = 0;

function mais() {
    atualizaTela(++valor);
}

function menos() {
    if(valor > 0){
        atualizaTela(--valor);
    }
}
function atualizaTela(a) {
    document.getElementById("valor").innerHTML = a;
}

function limpar(){
    valor = 0
    atualizaTela(valor=0);
}

