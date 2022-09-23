var modeloDetalles = document.URL.split('=')[1];
var modelo = JSON.parse(localStorage.getItem(modeloDetalles));

$(document).ready(function () {
    document.getElementById('titulo').innerHTML = "Nissan " + modeloDetalles;
    document.getElementById('detalles-foto1').src = modelo.foto1;
    document.getElementById('detalles-foto2').src = modelo.foto2;
    document.getElementById('detalles-foto3').src = modelo.foto3;
    document.getElementById('detalles-foto4').src = modelo.foto4;
    document.getElementById('detalles-foto5').src = modelo.foto1;
    document.getElementById('detalles-modelo').innerHTML = modeloDetalles;
    document.getElementById('detalles-estilo').innerHTML = modelo.estilo;
    document.getElementById('detalles-cilindraje').innerHTML = modelo.cilindraje;
    document.getElementById('detalles-combustible').innerHTML = modelo.combustible;
    document.getElementById('detalles-traccion').innerHTML = modelo.traccion;
    document.getElementById('detalles-precio').innerHTML = modelo.precio;
    document.getElementById('detalles-titulo-descripcion').innerHTML = modelo.titulodescripcion;
    document.getElementById('detalles-descripcion').innerHTML = modelo.descripcion;
});

