// Variables y Constantes
const botonLogin = document.getElementById("btnlogin");
const botonSign = document.getElementById("btnsign");
const pantallaNegra = document.getElementById("contenedorlogin");
const pantallaNegraSign = document.getElementById("contenedorsign");
const contenedorModal = document.getElementById("contenedormodal");
const contenedorModalSign = document.getElementById("contenedormodalsign");
const modalLogin = document.getElementById("modallogin");
const modalSign = document.getElementById("modalsign");
const botonCruz = document.getElementById("botonSalirFormulario");
const botonCruzSign = document.getElementById("salirSign");
const cuadradoRecuerdame = document.getElementById("checkcuadrado");
const labelRecuerdame = document.getElementById("recuerdamecuadrado");
const rellenoCheck = document.getElementById("rellenoCuadrado");
const containerMenu = document.getElementById("containermenu");
const formulario = document.getElementById("formulario");
const nombreSign = document.getElementById("firstname");
const apellidoSign = document.getElementById("lastname");
const mailSign = document.getElementById("mailsign");
const userNameSign = document.getElementById("username");
const contraseniaSign = document.getElementById("password");
const btnJoinFree = document.getElementById("btnfree");
const body = document.querySelector("body");


// Eventos para abrir el modal
botonLogin.addEventListener("click", ()=>{
    pantallaNegra.style.display = "block";
    contenedorModal.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";
}); 

const clickRecuerdame = () => {
    
    const estadoCheck = {mostrar: true}
    
    cuadradoRecuerdame.addEventListener( "click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })

    labelRecuerdame.addEventListener("click", () =>{
        if(estadoCheck.mostrar){
            rellenoCheck.style.opacity = 0;
            estadoCheck.mostrar = false;
        } else{
            rellenoCheck.style.opacity = 1;
            estadoCheck.mostrar = true;
        }
    })
    
}

botonSign.addEventListener("click", ()=>{
    pantallaNegraSign.style.display = "block";
    contenedorModalSign.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";
}); 

botonCruz.addEventListener("click", ()=>{
    pantallaNegra.style.display = "none";
    document.body.style.overflow = "auto";
});

botonCruzSign.addEventListener("click", ()=>{
    pantallaNegraSign.style.display = "none";
    document.body.style.overflow = "auto";
});


document.addEventListener('click', (event) => {
    const boolIsOutside = document.getElementById("contenedorlogin").isSameNode(event.target);
    const boolIsOutside2 =  document.getElementById("contenedorsign").isSameNode(event.target);
    if (boolIsOutside) {
        pantallaNegra.style.display = "none"
        document.body.style.overflow = "auto";
    }
    if (boolIsOutside2) {
        pantallaNegraSign.style.display = "none";
        document.body.style.overflow = "auto";
    }
})

clickRecuerdame();

// Guardando datos

//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    }
}


const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || []

const crearUsuario = () => {

    let primerNombre = nombreSign.value;
    let apellido = apellidoSign.value;
    let correoElectronico = mailSign.value;
    let nombreDeUsuario = userNameSign.value;
    let contrasenia = contraseniaSign.value;
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia);
    for(let u of listaUsuarios) {
        while (u.email === correoElectronico) {
            correoElectronico = alert("Ya existe un usuario con ese correo electronico, pruebe con otro");
        } 

        btnJoinFree.addEventListener('click', () => {
            pantallaNegraSign.style.display = "block";
            contenedorModalSign.style.transform = "translateY(0%)";
            document.body.style.overflow = "hidden";
        })    
    }
    for(let i of listaUsuarios) {
        while (i.username === nombreDeUsuario) {
            nombreDeUsuario = alert("Ya existe un usuario con ese nombre, pruebe con otro");
        }
        btnJoinFree.addEventListener('click', () => {
            pantallaNegraSign.style.display = "block";
            contenedorModalSign.style.transform = "translateY(0%)";
            document.body.style.overflow = "hidden";
        })       
    }

    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    return listaUsuarios;
}

const registro = () => {
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        formulario.reset();
    });

    crearUsuario();
};

btnJoinFree.addEventListener("click", registro);

btnJoinFree.addEventListener('click', () => {
    pantallaNegraSign.style.display = "none";
    document.body.style.overflow = "auto";
})



