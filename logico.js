function encriptar() {
    let texto = document.getElementById("inputUsuario").value;
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("resultados").innerText = textoEncriptado;
}

function descifrar() {
    let texto = document.getElementById("inputUsuario").value;
    let textoDescifrado = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    document.getElementById("resultados").innerText = textoDescifrado;
}

function copiarTexto() {
    let texto = document.getElementById("resultados").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
