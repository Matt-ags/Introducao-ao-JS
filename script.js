
function verificaridade(){
    const idade = parseInt(document.getElementById('idade').value);

    if (idade>=18){
        alert("Você é maior de idade e tem permissão de entrar no evento!")}
    else{
        alert("Você é menor de idade e não pode entrar no evento")
    }

}