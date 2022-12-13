let estado_info : boolean = false;
let estado = (estado_info) ? true : false;


var formulario = document.getElementById("text-info");
var boton = document.getElementById("button-submit");

function editar_info() { 
    estado_info = !estado_info;
    if(estado_info) {
        formulario?.removeAttribute("readonly");
        boton.style.display = "inline-block";
    } 
};

function handleSubmit() {
    formulario?.setAttribute("readonly", "true");
    boton.style.display = "none";
}