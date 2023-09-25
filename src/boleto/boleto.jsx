  // Evento para abrir el modal de selección de asientos al hacer clic en una película
  movieList.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
        const index = e.target.getAttribute("data-index");
        showSeatModal(index);
        }
});

// Función para mostrar el modal de selección de asientos
function showSeatModal(index) {

    const numSeatsPerRow = 9;
    const seats = [];


    for (let letra = 'A'; letra <= 'E'; letra = String.fromCharCode(letra.charCodeAt(0) + 1)){

        for (let seatNum = 1; seatNum <= numSeatsPerRow; seatNum++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = `${seatNum}${letra}`;
            seat.dataset.row = letra;
            seat.dataset.seatNum = seatNum;
            seatsContainer.appendChild(seat);
            seats.push(seat);
        }
    }

    seatModal.style.display ="block";

    //* Selección de asientos
    seatsContainer.addEventListener('click', (e) => {
    const seat = e.target;
    if (seat.classList.contains('seat') && !seat.classList.contains('occupied')) {
        seat.classList.toggle('selected');
        }
    });
}

// Evento para cerrar el modal de selección de asientos
seatModal.querySelector(".close").addEventListener("click", function() {
    seatModal.style.display = "none";
});

// Función para ver el resumen
function buySeats() {
    ticketModal.style.display = "block";
}
// Evento para ver el resumen de la compra
checkoutButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        alert('Debes seleccionar al menos un asiento.');
    } else {
        const seatNumbers = Array.from(selectedSeats).map((seat) => {
            return `${seat.dataset.row}-${seat.dataset.seatNum}`;
        });
        // Generar la boleta
        const ticketDetailsHTML = `
            <div style text-align : left>
                <h3>Número de entradas : ${selectedSeats.length}</h3>
                <h3>Asientos seleccionados: ${seatNumbers.join(', ')}</h3>
                <h3>Precio total: S/  ${selectedSeats.length * 25}</h3>
            </div>
        `;
        ticketDetails.innerHTML = ticketDetailsHTML;
        ticketDetails.classList.remove('hidden');
        buySeats();
    }
});
// Evento para cerrar el modal de resumen compra
ticketModal.querySelector(".close").addEventListener("click", function() {
    ticketModal.style.display = "none";
});


// Función para pagar pasarela
function buyPasarela() {
    document.getElementById('payment-form-p').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Pago realizado exitosamente.');
    });
    pasarelaModal.style.display = "block";
}
closeTicketModal.addEventListener('click', function() {
    buyPasarela();
    
});
// Evento para cerrar el modal de pasarela de pago
pasarelaModal.querySelector(".close").addEventListener("click", function() {
    pasarelaModal.style.display = "none";
});

