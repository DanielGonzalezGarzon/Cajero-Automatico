const usuarios = [
    {"nombre": "Pipino", "correo":'pipinocorto@algunsitio.com', "pasword":'1234', "monto": 1000000},
    {"nombre": "Armando Casas", "correo":"casasdebareque@algunlugar.com", "pasword":"1234", "monto": 900000},
    {"nombre": "Zoila Vaca", "correo":"vacadegar@algunsitio.com", "pasword":"1234", "monto": 2000000},
    {"nombre": "AlanBrito", "correo":"britodelgado@algunlugar.com", "pasword":"1234", "monto": 800000}
]
/* Construyendo las funciones de ingreso y validacion de las funciones */

/* Funciones en prueba, no ingresa ni muestra el modal de error... trabajando */

function login(){ 
    let correo = document.getElementById("correo").value;
    let pasword = document.getElementById("pasword").value;
    let usuario; 
    console.log(correo);
    console.log(pasword);

    let verify = !!usuarios.find(element => element.correo === correo && element.pasword === pasword);

    if (verify){
        localStorage.setItem("user", JSON.stringify(usuario));
        window.location='handbank.html';
    }
    else{
        document.getElementById("login-error").classList.remove("none");
    }       
}
function ocultar (){
    document.getElementById("login-error").classList.add("none");
}


