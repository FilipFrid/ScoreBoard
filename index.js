let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let sumHome = 0;
let sumGuest = 0;

// Function to add points to Home team
function addHomePoints(Points) {
  sumHome += Points;
  scoreHome.innerText = sumHome;
   
}

// Function to add points to Guest team
function addGuestPoints(Points) {
  sumGuest += Points;
  scoreGuest.innerText = sumGuest;
   
}

/* Function to start new game
1. When user clicks the button countdown starts
2. Score buttons are visible */
function newGame() {
    document.getElementById("timer").style.backgroundColor = "#000";
    document.getElementById("timer").style.color = "#fff";
    document.getElementById("home").style.backgroundColor = "initial";
    document.getElementById("guest").style.backgroundColor = "initial";
    document.getElementById("winner").style.visibility = "hidden";
    scoreGuest.innerText = 0;
    scoreHome.innerText = 0;
    sumHome = 0;
    sumGuest = 0;

    // Start countdown
    startCountdown();
    
    function showButtonsPanel() {
      const buttonsPanel = document.querySelectorAll(".buttons-panel");
      buttonsPanel.forEach(function(panel) {
        panel.style.display = 'flex';
      });
    }

    // Show buttons panel when new game starts
    showButtonsPanel()

    // Disable score buttons
    const buttons = document.getElementsByClassName('btn');

    for (let button of buttons) {
    button.disabled = false;  
    }

}


// Countdown Timer
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

        // Call function WinnerIs
        winnerIs ();        

        // Disable score buttons
        const buttons = document.getElementsByClassName('btn');

        for (let button of buttons) {
        button.disabled = true;  
        }
      }
    }

    // Function to format the time values (adds leading zeros if needed)
    function formatTime(time) {
      return time.toString().padStart(2, "0");
    }
    
}

// Function WinnerIs shows final result
function winnerIs() {
        if (sumHome > sumGuest) {
        document.getElementById("winner").innerText = "The Winner is HOME";
        document.getElementById("winner").style.visibility = "visible";
        document.getElementById("home").style.backgroundColor = "#D926D0";
        
        // Activates confetti for the winner
        confetti({
            spread: 360,
            startVelocity: 60,
            particleCount: 350
          });       
  
        } else if (sumHome < sumGuest) {
        document.getElementById("winner").innerText = "The Winner is AWAY";
        document.getElementById("winner").style.visibility = "visible"; 
        document.getElementById("guest").style.backgroundColor = "#D926D0";
        
        // Activates confetti for the winner
        confetti({
            spread: 360,
            startVelocity: 60,
            particleCount: 350
          }); 
               
        } else {
        document.getElementById("winner").innerText = "Draw. Start New Game.";
        document.getElementById("winner").style.visibility = "visible";
}}


