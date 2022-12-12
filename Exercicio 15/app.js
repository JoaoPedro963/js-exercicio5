function detetive(){
    let p1 = document.getElementById("pergunta1").text;
    let p2 = document.getElementById("pergunta2").text;
    let p3 = document.getElementById("pergunta3").text;
    let p4 = document.getElementById("pergunta4").text;
    let p5 = document.getElementById("pergunta5").text;
    let calculo = 0

    if(p1 = "Sim"){
        calculo  + 1
    }else if (p1 = "Não")
        calculo + 0

    if(p2 = "Sim"){
        calculo  + 1
    }else if (p2 = "Não")
        calculo  + 0

    
    if(p3 = "Sim"){
        calculo  + 1
    }else if (p3 = "Não")
        calculo  + 0
    

    if(p4 = "Sim"){
        calculo  + 1
    }else if (p4 = "Não")
        calculo  + 0
    

    if(p5 = "Sim"){
        calculo + 1
    }else if (p5 = "Não")
        calculo  + 0
    

    if(calculo >= 0 && calculo <= 1){
        document.getElementById("resposta").innerHTML = "Inocente"
        }else if(calculo = 2){
            document.getElementById("resposta").innerHTML = "Suspeito"
        }else if(calculo >= 3 && calculo <= 4){
            document.getElementById("resposta").innerHTML = "Cúmplice"
    }else (calculo = 5)
        document.getElementById("resposta").innerHTML = "Culpado"
    
}