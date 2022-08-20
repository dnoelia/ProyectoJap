function validarDatos(){
    let userInput=document.getElementById("user")
    let passInput=document.getElementById("pass")
    if (userInput.value!==undefined&&userInput.value!==""&&passInput.value!==undefined&&passInput.value!==""){
        window.location.href ="index.html"
    }else{
        alert ("Usuario y/o contraseñas inválidos")
    }

}
window.addEventListener("load",function(){
    document.getElementById("ingresar").addEventListener("click",validarDatos)

})