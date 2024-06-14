//botones y click
const botonesJugada = document.querySelectorAll('.boton-jugada');
botonesJugada.forEach(boton => {
    boton.addEventListener('click', manejarJugadaUsuario);
});

// jugadas
function jugadaOrdenador() {
    const jugadas = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * jugadas.length);
    return jugadas[indiceAleatorio];
}

// determinar el ganador
function determinarGanador(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
        return 'Empate';
    } else if (
        (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
    ) {
        return 'Usuario';
    } else {
        return 'Ordenador';
    }
}


let puntosUsuario = 0;
let puntosOrdenador = 0;

//jugada usuario
function manejarJugadaUsuario(event) {
    const jugadaUsuario = event.target.getAttribute('data-jugada');
    const jugadaComp = jugadaOrdenador();

    const ganador = determinarGanador(jugadaUsuario, jugadaComp);

    // resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `Tu jugada: ${jugadaUsuario}<br>Jugada de la máquina: ${jugadaComp}<br>Resultado: ${ganador}`;

    // contadores
    if (ganador === 'Usuario') {
        puntosUsuario++;
    } else if (ganador === 'Ordenador') {
        puntosOrdenador++;
    }

    document.getElementById('contador-usuario').textContent = `Tus puntos: ${puntosUsuario}`;
    document.getElementById('contador-ordenador').textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}
