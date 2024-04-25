// Verificar si el usuario está autenticado
$(document).ready(function(){
    const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");
    if(!usuarioAutenticado) {
        location.href = "index.html";
    }
});

// Boton de cerrar sesion
$("#cerrarSes").on("click", function(){
    localStorage.removeItem("usuarioAutenticado");
});


const viajesUsuario = [
    { id: 1, destino: "Playa", fecha: "2024-04-20", coste: 200, duracion: "3 horas", conductor: "Juan Pérez" },
    { id: 2, destino: "Montañas", fecha: "2024-04-15", coste: 150, duracion: "4 horas", conductor: "María García" },
    { id: 3, destino: "Ciudad", fecha: "2024-04-10", coste: 100, duracion: "2.5 horas", conductor: "Carlos Rodríguez" },
    { id: 4, destino: "Campo", fecha: "2024-04-05", coste: 120, duracion: "2 horas", conductor: "Laura Martínez" },
    { id: 5, destino: "Bosque", fecha: "2024-03-30", coste: 180, duracion: "5 horas", conductor: "David López" },
    { id: 6, destino: "Desierto", fecha: "2024-03-25", coste: 90, duracion: "3.5 horas", conductor: "Ana Sánchez" },
    { id: 7, destino: "Pueblo", fecha: "2024-03-20", coste: 110, duracion: "2 horas", conductor: "Pedro González" },
    { id: 8, destino: "Lago", fecha: "2024-03-15", coste: 130, duracion: "4 horas", conductor: "Elena Pérez" },
    { id: 9, destino: "Cataratas", fecha: "2024-03-10", coste: 170, duracion: "6 horas", conductor: "Mario Ruiz" },
    { id: 10, destino: "Reserva Natural", fecha: "2024-03-05", coste: 140, duracion: "3.5 horas", conductor: "Laura Gómez" },
    { id: 11, destino: "Parque Nacional", fecha: "2024-02-29", coste: 160, duracion: "5 horas", conductor: "Sergio López" },
    { id: 12, destino: "Granja", fecha: "2024-02-24", coste: 95, duracion: "2 horas", conductor: "Isabel Martínez" },
    { id: 13, destino: "Viñedo", fecha: "2024-02-19", coste: 125, duracion: "4 horas", conductor: "Jorge García" },
    { id: 14, destino: "Pueblo Costero", fecha: "2024-02-14", coste: 105, duracion: "3 horas", conductor: "María Rodríguez" },
    { id: 15, destino: "Gran Cañón", fecha: "2024-02-09", coste: 200, duracion: "6 horas", conductor: "Alejandro Ruiz" }
];

function mostrarUltimosViajes() {
    const ultimosViajes = viajesUsuario.slice(0, 4); // Obtener los primeros 4 viajes
    const container = document.getElementById("misViajes");

    // Limpiar el contenedor antes de agregar los nuevos viajes
    container.innerHTML = "";

    // Iterar sobre los últimos 4 viajes y agregarlos al contenedor utilizando una plantilla
    ultimosViajes.forEach(viaje => {
        const template = `
            <article class="flex flex-col h-full bg-white border border-slate-400 rounded-xl">
                <div class="py-2 px-3">
                    <h3 class="text-center">Destino: ${viaje.destino}</h3>
                    <p class="text-center">Fecha: ${viaje.fecha}</p>
                    <p class="text-center">Costo: ${viaje.coste}</p>
                    <p class="text-center">Duracion: ${viaje.duracion}</p>
                    <p class="text-center">Conductor: ${viaje.conductor}</p>
                </div>
            </article>
        `;
        container.innerHTML += template;
    });
}

window.onload = function() {
    mostrarUltimosViajes();
};



const botonMostrar = document.getElementById("mostrar");

botonMostrar.onclick = function() {
    // Generar el contenido del modal con los viajes
    const listaViajes = document.getElementById("masViajes");
    listaViajes.innerHTML = ""; // Limpiar la lista
  
    viajesUsuario.forEach(viaje => {
      const item = document.createElement("ul");
      item.innerHTML = `
        <li class="mb-10 ms-8">            
            <h3 class="flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">Lugar: ${viaje.destino}</h3>
            <time class="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Fecha: ${viaje.fecha}</time>
            <p class="text-sm mb-3 font-normal leading-none text-gray-500">Coste: ${viaje.coste}</p>
            <p class="text-sm mb-3 font-normal leading-none text-gray-500">Conductor: ${viaje.conductor}</p>
            <p class="text-sm mb-3 font-normal leading-none text-gray-500">Duracion: ${viaje.duracion}</p>
        </li>
      `;
      listaViajes.appendChild(item);
    });
}