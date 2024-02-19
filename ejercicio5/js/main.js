function añadirElemento() {
    var lista = document.getElementById('lista');
    var nuevoElemento = document.createElement('li');

    nuevoElemento.textContent = 'Elemento ' + (lista.children.length + 1);
    nuevoElemento.className = 'list-group-item';

    lista.appendChild(nuevoElemento);
}