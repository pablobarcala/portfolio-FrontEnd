function editar_info() {
    document.getElementById("edit-info").style.display = "block";
    document.getElementById("button-submit").style.display = "block";
    let texto = document.getElementById("text-info");
}

function handleinput(valor) {
    document.getElementById("text-info").innerText= valor;
}

function handlesubmit() {
    document.getElementById("edit-info").style.display = "none";
    document.getElementById("button-submit").style.display = "none";
}