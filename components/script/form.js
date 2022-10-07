function email(){
    var email = document.querySelector("email").value;
    while(true){
        if(email.indexOf('@') != -1){
            alert("Valor fornecido para email válido!")
            console.log("Deu certo!")
            break
        }else{
            paragrafo.innerHTML = "Valor fornecido para email inválido! Insira novamente."
            var email = prompt("Digite seu email:");
            console.log("Não deu certo!")
        }
    }
}