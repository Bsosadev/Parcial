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

let usuarios = [
    { nombre: "Usuario1", viajes: 5, montoPorViaje: 50 },
    { nombre: "Usuario2", viajes: 3, montoPorViaje: 40 },
    { nombre: "Usuario3", viajes: 7, montoPorViaje: 60 },
    { nombre: "Usuario4", viajes: 2, montoPorViaje: 45 },
    { nombre: "Usuario5", viajes: 6, montoPorViaje: 55 },
    { nombre: "Usuario6", viajes: 4, montoPorViaje: 35 },
    { nombre: "Usuario7", viajes: 8, montoPorViaje: 70 },
    { nombre: "Usuario8", viajes: 9, montoPorViaje: 65 },
    { nombre: "Usuario9", viajes: 1, montoPorViaje: 30 },
    { nombre: "Usuario10", viajes: 10, montoPorViaje: 75 }
];

// Función para calcular el monto total de los viajes de un usuario
function calcularMontoTotal(viajes, montoPorViaje) {
    return viajes * montoPorViaje;
}

// Función para generar el HTML con la información de los viajes
function mostrarViajes() {
    let html = '';
    usuarios.forEach(usuario => {
        let montoTotal = calcularMontoTotal(usuario.viajes, usuario.montoPorViaje);
        html += `<article class="flex flex-col h-full bg-white border border-slate-400 rounded-xl">
                    <div class="py-2 px-3">
                        <h3>Nombre: ${usuario.nombre}</h3>
                        <p>Viajes: ${usuario.viajes}</p>
                        <p>Monto por Viaje: ${usuario.montoPorViaje}</p>
                        <p>Monto Total: ${montoTotal}</p>
                    </div>
                 </article>`;
    });
    document.getElementById('misViajes').innerHTML = html;
}

// Llamar a la función para mostrar los viajes al cargar la página
mostrarViajes();