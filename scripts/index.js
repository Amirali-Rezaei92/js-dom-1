const lamp = document.querySelector('#imageLamp');
const buttonTurn = document.querySelector('#btn-off');

buttonTurn.addEventListener("click", () => {
    if (lamp.src.includes("white_lamp.png")) {
        lamp.src = "./img-6/yellow_lamp.png";
        buttonTurn.classList.add('btn-danger','text-white')
        buttonTurn.innerHTML="Turn Off";
    } else {  
        lamp.src= "./img-6/white_lamp.png"
        buttonTurn.classList.remove('btn-danger','text-white')
        buttonTurn.innerHTML="Turn On";
        }
    }
)