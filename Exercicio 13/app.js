function maiorIdade(){
    let idade = document.getElementById("idade").value

    if (idade <= 1 && idade < 18){
    document.getElementById("resposta").innerHTML = "Você ainda é de menor!"
    }
    else if (idade = 18 && idade <= 100){
    document.getElementById("resposta").innerHTML = "Você já é de maior!"
    }
    else
    document.getElementById("resposta").innerHTML = "Idade inválida, tente novamente!"
}
