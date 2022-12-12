function imc(){
    
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let calculo = peso / (altura **2)
    console.log(calculo)

    if (calculo < 18.5){
        document.getElementById("resposta").innerHTML = "Abaixo do peso."
    } else if (calculo >= 18.5 && calculo < 25){
        document.getElementById("resposta").innerHTML = "Peso nornal."
    } else if (calculo >= 25 && calculo < 30){
        document.getElementById("resposta").innerHTML = "Acima do peso."
    }else if (calculo >= 30){
        document.getElementById("resposta").innerHTML = "Obeso"
    }
    
}