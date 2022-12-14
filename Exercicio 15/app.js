function detetive(){
    let prgt1 = document.getElementById("p1").value
    let prgt2 = document.getElementById("p2").value
    let prgt3 = document.getElementById("p3").value
    let prgt4 = document.getElementById("p4").value
    let prgt5 = document.getElementById("p5").value
    let culpado = 0
    let inocente = 0


    if(prgt1 == "Sim"){
        culpado = culpado + 1
    }else if (prgt1 == "Não")
        inocente = inocente + 1

    if(prgt2 == "Sim"){
        culpado = culpado + 1
    }else if (prgt2 == "Não")
        inocente = inocente + 1

    
    if(prgt3 == "Sim"){
        culpado = culpado  + 1
    }else if (prgt3 == "Não")
        inocente = inocente + 1
    

    if(prgt4 == "Sim"){
        culpado = culpado + 1
    }else if (prgt4 == "Não")
        inocente = inocente + 1
    

    if(prgt5 == "Sim"){
        culpado = culpado + 1
    }else if (prgt5 == "Não")
        inocente = inocente + 1
    



    if(culpado <= 1){
        document.getElementById("resposta").innerHTML = "Inocente"
        }else if(culpado == 2){
            document.getElementById("resposta").innerHTML = "Suspeito"
        }else if(culpado >= 3 && culpado <= 4){
            document.getElementById("resposta").innerHTML = "Cúmplice"
        }else if (culpado == 5){
        document.getElementById("resposta").innerHTML = "Culpado"
        }
    
}