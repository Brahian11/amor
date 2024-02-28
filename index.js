function abrirModal(src) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('imagenModal').src = src;
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

