// Selezioniamo gli elementi dal DOM
const lamp = document.querySelector('#imageLamp');
const buttonTurn = document.querySelector('#btn-off');

// Aggiungiamo un event listener al bottone
buttonTurn.addEventListener("click", () => {

    // Controlliamo se la lampadina è spenta (immagine bianca)
    if (lamp.src.includes("white_lamp.png")) {

        // Cambiamo l'immagine con quella accesa
        lamp.src = "./img-6/yellow_lamp.png";

        // Aggiorniamo lo stile del bottone per indicare "ON"
        buttonTurn.classList.add('btn-danger', 'text-white');

        // Cambiamo il testo del bottone
        buttonTurn.innerHTML = "Turn Off";

    } else {

        // Se la lampadina è accesa, la spegniamo
        lamp.src = "./img-6/white_lamp.png";

        // Rimuoviamo lo stile "danger" dal bottone
        buttonTurn.classList.remove('btn-danger', 'text-white');

        // Cambiamo il testo del bottone
        buttonTurn.innerHTML = "Turn On";
    }
});
