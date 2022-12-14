function calculo(){
    let altura = parseFloat(document.getElementById("altura").value)
    let genero = document.getElementById("genero").value
    let resultado = 0

    if(genero == "M"){
        resultado = (72.7 * altura) - 58
        document.getElementById("result").innerHTML = resultado.toFixed(2)
    }
    else if (genero == "F"){
        resultado = (62.1 * altura) - 44.7
        document.getElementById("result").innerHTML = resultado.toFixed(2)
    }

}