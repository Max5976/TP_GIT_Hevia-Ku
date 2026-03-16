let votos = 0
let yaVoto = false

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

// verificar si ya votó
if(yaVoto === true){
    textoVotos.innerText = "Votos: " + votos + ". Como ya votaste, no puedes hacerlo otra vez."
    console.log("voto denegado")
}
else {
    votos += 1
    textoVotos.innerText = "Votos: " + votos
    console.log("voto registrado")
    yaVoto = true
}

})


const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function(e){

e.preventDefault()
    
let nombre = document.getElementById("nombre").value
let idea = document.getElementById("idea").value

document.getElementById("mensaje").innerText = "Mandaste tu propuesta"

if(nombre === "" || idea === ""){

document.getElementById("mensaje").innerText = "Completa todos los campos"

}

})
