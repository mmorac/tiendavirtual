const express = require("express");
const fileRoute = express.Router();

/*
Título de descripción
Descripción
Precio
Modelo
Combustible
traccion
Transmisión
Cilindraje
Estilo
Url Imagen
*/

fileRoute.get("/items", async (req, res) => {
    let items = [
        {
            "urlimagen": "img/Qashqai.jpg",
            "foto1": "img/item/qashqai-1.jpg",
            "foto2": "img/item/qashqai-2.jpg",
            "foto3": "img/item/qashqai-3.jpg",
            "foto4": "img/item/qashqai-4.jpg",
            "tituloImagen": "Nissan Qashqai",
            "estilo": "SUV",
            "modelo": "Qashqai",
            "cilindraje": "1800 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof",
            "titulodescripcion": "QASHQAI TURBO SENSE 4X2",
            "descripcion": "",
            "precio": "$38,000.00",
            "combustible": "Gasolina",
            "traccion": "4X2",
            "transmision": "Dual 7 velocidades",
        },
        
        {
            "urlimagen": "img/Versa.jpg",
            "foto1": "img/item/versa-1.jpg",
            "foto2": "img/item/versa-2.jpg",
            "foto3": "img/item/versa-3.jpg",
            "foto4": "img/item/versa-4.jpg",
            "estilo": "Sedan",
            "modelo": "Versa",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, cruise control",
            "titulodescripcion": "NISSAN VERSA LUX",
            "descripcion": "La tecnología del Nuevo Nissan Versa hace cada momento tras el volante más sencillo, seguro y disfrutable. Las asistencias de manejo te ayudaran a prevenir cualquier problema, e incluso pueden intervenir por ti de ser necesario. Y cuando se trata de manejar, su estilo emocionante y rendimiento de hasta 00 km/h son todos tuyos. Así es como debe sentirse la tecnología.",
            "precio": "$23,500",
            "combustible": "Gasolina",
            "traccion": "4x2",
            "transmision": "Manual 5 velocidades",
        },
        
        {
            "urlimagen": "img/Sentra.png",
            "foto1": "img/item/sentra-1.jpg",
            "foto2": "img/item/sentra-2.jpg",
            "foto3": "img/item/sentra-3.jpg",
            "foto4": "img/item/sentra-4.jpg",
            "estilo": "Sedan",
            "modelo": "Sentra",
            "cilindraje": "2000 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, cámara de retroceso",
            "titulodescripcion": "NISSAN SENTRA SENSE",
            "descripcion": "Todo comienza con un exterior completamente nuevo: una postura más baja y ancha, más un interior cuidadosamente diseñado. Además, ahora cuenta con más potencia estándar y excelente rendimiento dinámico. Nuevo Nissan Sentra tiene la conectividad perfecta y tecnología de asistencia para el conductor, lo cual hace que la confianza sea su segunda naturaleza. Este es el nuevo Sentra. Esta es la movilidad inteligente de Nissan.",
            "precio": "$32,900.00",
            "combustible": "Gasolina",
            "traccion": "4x2",
            "transmision": "Manual de 6 velocidades",
        },
        
        {
            "urlimagen": "img/Leaf.png",
            "foto1": "img/item/leaf-1.jpg",
            "foto2": "img/item/leaf-2.jpg",
            "foto3": "img/item/leaf-3.jpg",
            "foto4": "img/item/leaf-4.jpg",
            "estilo": "Sedan",
            "modelo": "Leaf",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, dirección electroasistida",
            "titulodescripcion": "NISSAN LEAF",
            "descripcion": "Prepárate para una forma completamente nueva de manejar, en la que cada día se vuelve más emocionante. Siéntete más inspirado, capaz y seguro, a donde sea que vayas. Además, Nissan LEAF está equipado con algunos de los sistemas de asistencia a la conducción más avanzados, así que más que el auto eléctrico mejor vendido del mundo, es tu compañero en hacer cada día simplemente asombroso.",
            "precio": "$17,500.00",
            "combustible": "Gasolina",
            "traccion": "4x2",
            "transmision": "Manual de 5 velocidades",
        },
        
        {
            "urlimagen": "img/Kicks.jpg",
            "foto1": "img/item/kicks-1.jpg",
            "foto2": "img/item/kicks-2.jpg",
            "foto3": "img/item/kicks-3.jpg",
            "foto4": "img/item/kicks-4.jpg",
            "estilo": "SUV",
            "modelo": "Kicks",
            "cilindraje": "2000 CC",
            "extras": "Vidrios eléctricos, cierre central",
            "titulodescripcion": "NISSAN KICKS LUX",
            "descripcion": "Descubre el nuevo Nissan Kicks 2021. Con su nuevo diseño, equipamiento y tecnología; convierte el viaje de tu vida en algo increíble.",
            "precio": "$27,900.00",
            "combustible": "Gasolina",
            "traccion": "4x2",
            "transmision": "Manual de 5 velocidades",
        },
        
        {
            "urlimagen": "img/Frontier.png",
            "foto1": "img/item/frontier-1.jpg",
            "foto2": "img/item/frontier-2.jpg",
            "foto3": "img/item/frontier-3.jpg",
            "foto4": "img/item/frontier-4.jpg",
            "estilo": "Pickup",
            "modelo": "Frontier",
            "cilindraje": "4000 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripcion": "NISSAN FRONTIER PRO-4X",
            "descripcion": "Creada bajo el histórico legado de pick-ups Nissan Frontier hechas para resistirlo todo. PRO como para llevarte hasta dondetu imaginación lo permita. Nissan Frontier PRO-4X está hecha para superar cualquier desafío extremo que el off-road te presente.",
            "precio": "$32,000.00",
            "combustible": "Gasolina",
            "traccion": "4X4",
            "transmision": "6 VELOCIDADES",
        },

        {
            "urlimagen": "img/March.png",
            "foto1": "img/item/march-1.jpg",
            "foto2": "img/item/march-2.jpg",
            "foto3": "img/item/march-3.jpg",
            "foto4": "img/item/march-4.jpg",
            "estilo": "Sedan",
            "modelo": "March",
            "cilindraje": "1600 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripcion": "NISSAN MARCH LUX",
            "descripcion": "Nissan MARCH es seguridad, rendimiento que superará tus expectativas y demostrará que es un auto equipado para descubrir nuevas emociones",
            "precio": "$19,900.00",
            "combustible": "Gasolina",
            "traccion": "4x2",
            "transmision": "Automática de 5 velocidades",
        },

        {
            "urlimagen": "img/Urrvan.jpg",
            "foto1": "img/item/urvan-1.jpg",
            "foto2": "img/item/urvan-2.jpg",
            "foto3": "img/item/urvan-3.jpg",
            "foto4": "img/item/urvan-4.jpg",
            "estilo": "Van",
            "modelo": "Urvan",
            "cilindraje": "2500 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof, space cab",
            "titulodescripcion": "NISSAN URVAN",
            "descripcion": "Trae contigo a todo el equipo con asientos disponibles para 16, todo ello con amplia altura. Y con múltiples configuraciones de asientos, siempre puedes hacer más espacio para equipo",
            "precio": "$41,500.00",
            "combustible": "DIESEL",
            "traccion": "4x2",
            "transmision": "Automática de 6 velocidades",
        },
        
        {
            "urlimagen": "img/Xtrail.png",
            "foto1": "img/item/xtrail-1.jpg",
            "foto2": "img/item/xtrail-2.jpg",
            "foto3": "img/item/xtrail-3.jpg",
            "foto4": "img/item/xtrail-4.jpg",
            "estilo": "SUV",
            "modelo": "X-Trail",
            "cilindraje": "2400 CC",
            "extras": "Vidrios eléctricos, cierre central, sunroof",
            "titulodescripcion": "NISSAN X-TRAIL",
            "descripcion": "Disfruta de la vida familiar en un vehículo más grande y audaz, equipado con todo lo que necesitas: estilo, respuesta sólida, tecnología de primer nivel y el confort y la flexibilidad perfecta para tus aventuras.",
            "precio": "$36,900.00",
            "combustible": "DIESEL",
            "traccion": "4x2",
            "transmision": "Automática de 5 velocidades",
        }    ];
    res.json(items);
})

module.exports = fileRoute;