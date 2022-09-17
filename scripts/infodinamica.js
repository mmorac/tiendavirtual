const express = require("express");
const fileRoute = express.Router();

/*
Título de descripción
Descripción
Precio
Modelo
Combustible
Tracción
Transmisión
Cilindraje
Estilo
Url Imagen
*/

fileRoute.get("/items", async (req, res) => {
    let items = [
        {
            "urlimagen": "img/Qashqai.jpg",
            "tituloImagen": "Nissan Qashqai",
            "estilo": "SUV",
            "modelo": "Qashqai",
            "cilindraje": 1800,
            "extras": "Vidrios eléctricos, cierre central, sunroof"
        },
        
        {
            "urlimagen": "img/Versa.jpg",
            "estilo": "Sedan",
            "modelo": "Versa",
            "cilindraje": 1600,
            "extras": "Vidrios eléctricos, cierre central, sunroof, cruise control"
        },
        
        {
            "urlimagen": "img/Sentra.png",
            "estilo": "Sedan",
            "modelo": "Sentra",
            "cilindraje": 1800,
            "extras": "Vidrios eléctricos, cierre central, sunroof, cámara de retroceso"
        },
        
        {
            "urlimagen": "img/Leaf.png",
            "estilo": "Sedan",
            "modelo": "Leaf",
            "cilindraje": 1600,
            "extras": "Vidrios eléctricos, cierre central, dirección electroasistida"
        },
        
        {
            "urlimagen": "img/Kicks.jpg",
            "estilo": "SUV",
            "modelo": "Kicks",
            "cilindraje": 2000,
            "extras": "Vidrios eléctricos, cierre central"
        },
        
        {
            "urlimagen": "img/Frontier.png",
            "estilo": "Pickup",
            "modelo": "Frontier",
            "cilindraje": 2600,
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab"
        },

        {
            "urlimagen": "img/March.png",
            "estilo": "Sedan",
            "modelo": "March",
            "cilindraje": 1400,
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab"
        },

        {
            "urlimagen": "img/Urrvan.jpg",
            "estilo": "Van",
            "modelo": "Urrvan",
            "cilindraje": 2500,
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab"
        },
        
        {
            "urlimagen": "img/Xtrail.png",
            "estilo": "SUV",
            "modelo": "X-Trail",
            "cilindraje": 2400,
            "extras": "Vidrios eléctricos, cierre central, sunroof"
        }    ];
    res.json(items);
})

module.exports = fileRoute;