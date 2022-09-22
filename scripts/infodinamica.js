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
            "cilindraje": "1800 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof",
            "titulodescripción": "QASHQAI TURBO SENSE 4X2",
            "descripcion": "",
            "precio": "$38,000.00",
            "combustible": "Gasolina",
            "tracción": "4X2",
            "transmision": "Dual 7 velocidades",
        },
        
        {
            "urlimagen": "img/Versa.jpg",
            "estilo": "Sedan",
            "modelo": "Versa",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, cruise control",
            "titulodescripción": "NISSAN VERSA LUX",
            "descripcion": "La tecnología del Nuevo Nissan Versa hace cada momento tras el volante más sencillo, seguro y disfrutable. Las asistencias de manejo te ayudaran a prevenir cualquier problema, e incluso pueden intervenir por ti de ser necesario. Y cuando se trata de manejar, su estilo emocionante y rendimiento de hasta 00 km/h son todos tuyos. Así es como debe sentirse la tecnología.",
            "precio": "$23,500",
            "combustible": "Gasolina",
            "tracción": "4x2",
            "transmision": "Manual 5 velocidades",
        },
        
        {
            "urlimagen": "img/Sentra.png",
            "estilo": "Sedan",
            "modelo": "Sentra",
            "cilindraje": "2000 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, cámara de retroceso",
            "titulodescripción": "NISSAN SENTRA SENSE",
            "descripcion": "Todo comienza con un exterior completamente nuevo: una postura más baja y ancha, más un interior cuidadosamente diseñado. Además, ahora cuenta con más potencia estándar y excelente rendimiento dinámico. Nuevo Nissan Sentra tiene la conectividad perfecta y tecnología de asistencia para el conductor, lo cual hace que la confianza sea su segunda naturaleza. Este es el nuevo Sentra. Esta es la movilidad inteligente de Nissan.",
            "precio": "$32,900.00",
            "combustible": "Gasolina",
            "tracción": "4x2",
            "transmision": "Manual de 6 velocidades",
        },
        
        {
            "urlimagen": "img/Leaf.png",
            "estilo": "Sedan",
            "modelo": "Leaf",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, dirección electroasistida",
            "titulodescripción": "NISSAN LEAF",
            "descripcion": "Prepárate para una forma completamente nueva de manejar, en la que cada día se vuelve más emocionante. Siéntete más inspirado, capaz y seguro, a donde sea que vayas. Además, Nissan LEAF está equipado con algunos de los sistemas de asistencia a la conducción más avanzados, así que más que el auto eléctrico mejor vendido del mundo, es tu compañero en hacer cada día simplemente asombroso.",
            "precio": "$17,500.00",
            "combustible": "Gasolina",
            "tracción": "4x2",
            "transmision": "Manual de 5 velocidades",
        },
        
        {
            "urlimagen": "img/Kicks.jpg",
            "estilo": "SUV",
            "modelo": "Kicks",
            "cilindraje": "2000 CC",
            "extras": "Vidrios eléctricos, cierre central",
            "titulodescripción": "NISSAN KICKS LUX",
            "descripcion": "Descubre el nuevo Nissan Kicks 2021. Con su nuevo diseño, equipamiento y tecnología; convierte el viaje de tu vida en algo increíble.",
            "precio": "$27,900.00",
            "combustible": "Gasolina",
            "tracción": "4x2",
            "transmision": "Manual de 5 velocidades",
        },
        
        {
            "urlimagen": "img/Frontier.png",
            "estilo": "Pickup",
            "modelo": "Frontier",
            "cilindraje": "4000 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripción": "NISSAN FRONTIER PRO-4X",
            "descripcion": "Creada bajo el histórico legado de pick-ups Nissan Frontier hechas para resistirlo todo. PRO como para llevarte hasta dondetu imaginación lo permita. Nissan Frontier PRO-4X está hecha para superar cualquier desafío extremo que el off-road te presente.",
            "precio": "$32,000.00",
            "combustible": "Gasolina",
            "tracción": "4X4",
            "transmision": "6 VELOCIDADES",
        },

        {
            "urlimagen": "img/March.png",
            "estilo": "Sedan",
            "modelo": "March",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripción": "NISSAN MARCH LUX",
            "descripcion": "Nissan MARCH es seguridad, rendimiento que superará tus expectativas y demostrará que es un auto equipado para descubrir nuevas emociones",
            "precio": "$19,900.00",
            "combustible": "Gasolina",
            "tracción": "4x2",
            "transmision": "Automática de 5 velocidades",
        },

        {
            "urlimagen": "img/Urrvan.jpg",
            "estilo": "Van",
            "modelo": "Urvan",
            "cilindraje": "2500 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripción": "NISSAN URVAN",
            "descripcion": "Trae contigo a todo el equipo con asientos disponibles para 16, todo ello con amplia altura. Y con múltiples configuraciones de asientos, siempre puedes hacer más espacio para equipo",
            "precio": "$41,500.00",
            "combustible": "DIESEL",
            "tracción": "4x2",
            "transmision": "Automática de 6 velocidades",
        },
        
        {
            "urlimagen": "img/Xtrail.png",
            "estilo": "SUV",
            "modelo": "X-Trail",
            "cilindraje": "2400 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof",
            "titulodescripción": "NISSAN X-TRAIL",
            "descripcion": "Disfruta de la vida familiar en un vehículo más grande y audaz, equipado con todo lo que necesitas: estilo, respuesta sólida, tecnología de primer nivel y el confort y la flexibilidad perfecta para tus aventuras.",
            "precio": "$36,900.00",
            "combustible": "DIESEL",
            "tracción": "4x2",
            "transmision": "Automática de 5 velocidades",
        }    ];
    res.json(items);
})

module.exports = fileRoute;