let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let sumHome = 0
let sumGuest = 0


function homeAdd1Point () {
    sumHome +=1;
    scoreHome.innerText = sumHome
     
}

function homeAdd2Points () {
    sumHome +=2;
    scoreHome.innerText = sumHome
    
}

function homeAdd3Points () {
    sumHome +=3;
    scoreHome.innerText = sumHome
    
}

function guestAdd1Point () {
    sumGuest +=1;
    scoreGuest.innerText = sumGuest
      
}

function guestAdd2Points () {
    sumGuest +=2;
    scoreGuest.innerText = sumGuest
    
}

function guestAdd3Points () {
    sumGuest +=3;
    scoreGuest.innerText = sumGuest
    
}

function newGame () {
    document.getElementById("timer").style.backgroundColor = "#000";
    document.getElementById("timer").style.color = "#fff";
    document.getElementById("home").style.backgroundColor = "initial";
    document.getElementById("guest").style.backgroundColor = "initial";
    document.getElementById("winner").style.visibility = "hidden";
    scoreGuest.innerText = 0;
    scoreHome.innerText = 0;
    sumHome = 0;
    sumGuest = 0;   
    startCountdown();
}


/* Countdown Timer  */

function startCountdown() {

    // Set the countdown time (in seconds)
    const countdownTime = 10; // 1 minute (60)

    // Calculate the end time
    const endTime = new Date().getTime() + countdownTime * 1000;

    // Update the countdown every second
    const countdown = setInterval(updateCountdown, 1000);

    // Function to update the countdown timer
    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = Math.max(0, endTime - now);

      // Calculate hours, minutes, and seconds
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Format the time values
      const formattedTime = formatTime(minutes) + ":" + formatTime(seconds);

      // Display the formatted time
      document.getElementById("timer").textContent = formattedTime;

      // Check if the countdown has finished
      if (timeRemaining === 0) {
        clearInterval(countdown);
        document.getElementById("timer").textContent = "END OF GAME";
        document.getElementById("timer").style.backgroundColor = "#F94F6D";
        document.getElementById("timer").style.color = "#000";
        winnerIs ();        
      }
    }

    // Function to format the time values (adds leading zeros if needed)
    function formatTime(time) {
      return time.toString().padStart(2, "0");
    }
    
}

function winnerIs (){
        if (sumHome > sumGuest) {
        document.getElementById("winner").innerText = "The Winner is HOME";
        document.getElementById("winner").style.visibility = "visible";
        document.getElementById("home").style.backgroundColor = "#D926D0";
        confetti({
            spread: 360,
            startVelocity: 60,
            particleCount: 350
          });
        
                  
            
        } else if (sumHome < sumGuest) {
        document.getElementById("winner").innerText = "The Winner is AWAY";
        document.getElementById("winner").style.visibility = "visible"; 
        document.getElementById("guest").style.backgroundColor = "#D926D0";
        confetti({
            spread: 360,
            startVelocity: 60,
            particleCount: 350
          }); 
               
        } else {
        document.getElementById("winner").innerText = "Draw. Start New Game.";
        document.getElementById("winner").style.visibility = "visible";
}}



var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 160
  // any other options from the global
  // confetti function
});


