;(function(){

window.addEventListener("load", cargarPagina);
	
	var contenedorPadre = document.getElementById("contenedorPadre");
    var contenedorLista = document.getElementById("contenedorLista");
    var span = document.getElementById("span");
    var formulario = document.getElementById("formulario");
    var input = document.getElementById("input");
    var btnGuardar = document.getElementById("btnGuardar");
    var btnCerrar = document.getElementById("btnCerrar");

    function cargarPagina(){
    	span.addEventListener("click", aparecerLista);
    }

    function aparecerLista(){
        span.classList.add("none");
        formulario.classList.remove("none");
        
        input.value = "";

        input.focus();

        btnGuardar.addEventListener("click", agregar);
        btnCerrar.addEventListener("click", cerrar);   
    }

    function cerrar(){
        formulario.classList.add("none");
        span.classList.remove("none");
    }

    function agregar(e){
        e.preventDefault();
        formulario.classList.add("none");
        agregarLista();
        // agregarContenedor();
    }

    function agregarLista(){

        var nuevaLista = document.createElement("div");
    	var tituloLista = document.createElement("div");
        var linkTarjeta = document.createElement("a");

        tituloLista.textContent = input.value;
        linkTarjeta.innerText = "Añadir una tarjeta";

        input.value = "";

        nuevaLista.classList.add("nueva-lista");
        tituloLista.classList.add("titulo-lista");
        linkTarjeta.setAttribute("href", "#");

        contenedorLista.appendChild(nuevaLista);
        nuevaLista.appendChild(tituloLista);
        nuevaLista.appendChild(linkTarjeta);

        nuevaLista.insertBefore(span, nuevaLista.children[0]);
        nuevaLista.insertBefore(formulario, nuevaLista.children[1]);

        linkTarjeta.addEventListener("click", agregarTarjeta);
    }

    function agregarTarjeta(){

        this.classList.add("none");

        var nuevaTarjeta = document.createElement("form");
        var textarea = document.createElement("textarea");
        var btnAñadir = document.createElement("button");
        var btnEliminar = document.createElement("button");

        nuevaTarjeta.classList.add("nueva-tarjeta");
        textarea.classList.add("textarea");
        btnAñadir.setAttribute("type", "submit");

        this.parentElement.appendChild(nuevaTarjeta);
        nuevaTarjeta.appendChild(textarea);
        nuevaTarjeta.appendChild(btnAñadir);
        nuevaTarjeta.appendChild(btnEliminar);

        textarea.focus();

        btnAñadir.textContent = "Añadir";
        btnEliminar.textContent = "X";

        btnAñadir.addEventListener("click", añadirTarjeta);
    }

    function añadirTarjeta() {

        var contenedorTarjeta = document.createElement("div");

        contenedorTarjeta.classList.add("contenedor-tarjeta");

        contenedorTarjeta.textContent = this.parentElement.children[0].value;

        this.parentElement.insertBefore(contenedorTarjeta,this.parentElement.children[1]);
    }

})();