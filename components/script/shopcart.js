var valor = 0;
function precoUnid(){
    var precoUnid = 90.00;
    var precoTela = document.getElementById("valorUnid");
    precoTela.innerHTML = precoUnid.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function total(num){
    var precoUnid = 90.00;
    var precoTotal = precoUnid * num;
    var precoTotalTela = document.getElementById("valorTotal");
    precoTotalTela.innerHTML = precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    ;
}


function mais() {
    atualizaTela(++valor);
    total(valor)
}

function menos() {
    if(valor > 0){
        atualizaTela(--valor);
        total(valor)
    }
}
function atualizaTela(a) {
    document.getElementById("quantVezes").innerHTML = a;
}

function limpar(){
    valor = 0
    atualizaTela(valor=0);
}

