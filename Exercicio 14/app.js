function tabuada(){
    let numero = document.getElementById("numero").value
    let cont = 0

    while (cont < 11){
    document.getElementById("resposta").innerHTML += numero + " X " + cont + " = " + numero * cont + "<br>"
    cont++
    }
}