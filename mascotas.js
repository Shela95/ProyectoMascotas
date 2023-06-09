const usuario = document.getElementById("usuario")
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const celular = document.getElementById("celular")
const pass = document.getElementById("password")
const pass2 = document.getElementById("password2")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (usuario.value.length < 6) {
        warnings += `El nombre de usuario  no es valido <br>`
        entrar = true
    }
   
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if (apellido.value.length <6) {
        warnings += `El apellido  no es valido <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
     if (celular.value.length <10) {
        warnings += `El celular  no es valido <br>`
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(pass.value != pass2.value){
        warnings += `No coinciden las contraseñas <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
