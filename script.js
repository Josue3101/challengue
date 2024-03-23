// Función para encriptar el texto
function encriptar(texto) {
    const mensajeEncriptado = texto
        .toLowerCase()
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')
        .replace(/[^a-z ]/g, ''); // Eliminar caracteres que no sean letras o espacios

    // Ocultar la imagen y el texto
    document.querySelector('.contenedormunieco').style.display = 'none';
    document.querySelector('.contenedor-parrafo').style.display = 'none';

    return mensajeEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    const mensajeDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Ocultar la imagen y el texto
    document.querySelector('.contenedormunieco').style.display = 'none';
    document.querySelector('.contenedor-parrafo').style.display = 'none';

    return mensajeDesencriptado;
}

// Obtener elementos del DOM
const cajaTexto = document.querySelector('.cajatexto');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const resultado = document.querySelector('.texto-resultado');

// Evento para encriptar el texto
btnEncriptar.addEventListener('click', () => {
    const texto = cajaTexto.value;
    resultado.textContent = encriptar(texto);
});

// Evento para desencriptar el texto
btnDesencriptar.addEventListener('click', () => {
    const texto = cajaTexto.value;
    resultado.textContent = desencriptar(texto);
});

// Evento para copiar el texto al portapapeles
btnCopiar.addEventListener('click', () => {
    const textoResultado = resultado.textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            alert('¡Texto copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});
