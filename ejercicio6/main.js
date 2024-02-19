window.onload = function() {
    var enlaces = document.getElementsByClassName('hiddenText');

    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(e){
            e.preventDefault();

            var contenido = this.previousElementSibling;
            if(contenido.style.display === 'none'){
                contenido.style.display = 'block';
                
                this.textContent = 'Ocultar contenidos';
            }else{
                contenido.style.display = 'none';
                this.textContent = 'Mostrar Contenidos';
            }
        })
    }
}