var estado_info = false;
var estado = (estado_info) ? true : false;
var formulario = document.getElementById("text-info");
var boton = document.getElementById("button-submit");
function editar_info() {
    estado_info = !estado_info;
    if (estado_info) {
        formulario === null || formulario === void 0 ? void 0 : formulario.removeAttribute("readonly");
        boton.style.display = "inline-block";
    }
}
;
function handleSubmit() {
    formulario === null || formulario === void 0 ? void 0 : formulario.setAttribute("readonly", "true");
    boton.style.display = "none";
}
