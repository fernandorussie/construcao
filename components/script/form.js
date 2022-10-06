var email = document.querySelector("email").value;
function email(item){
    if(item.indexOf('@') != -1){
        alert("Valor fornecido para email válido!")
        console.log("Deu certo!")
        
    }else{
        alert("Valor fornecido para email inválido!")
        console.log("Não deu certo!")
    }
}