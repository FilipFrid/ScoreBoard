let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let sumHome = 0;
let sumGuest = 0;
let wonGamesHome = 0;
let wonGamesGuest = 0;

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

    // Function makes buttons visible when new game starts
    function showButtonsPanel() {
      const buttonsPanel = document.querySelectorAll(".buttons-panel");
      buttonsPanel.forEach(function(panel) {
        panel.style.visibility = 'visible';
      });
    }

    // Show buttons panel when new game starts
    showButtonsPanel();

    // Disable score buttons
    const buttons = document.getElementsByClassName('btn');

    for (let button of buttons) {
    button.disabled = false;  
    }

}


// Countdown Timer
function startCountdown() {

    // Set the countdown time (in seconds)
    const countdownTime = 5; // 1 minute (60)

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

        // Adds a result of each game
        addResult(sumHome, sumGuest); 
      }
    }

    // Function to format the time values (adds leading zeros if needed)
    function formatTime(time) {
      return time.toString().padStart(2, "0");
    }
    
}

// Function WinnerIs shows result after each game
function winnerIs() {
        if (sumHome > sumGuest) {
        document.getElementById("winner").innerText = "The Winner is HOME";
        document.getElementById("winner").style.visibility = "visible";
        document.getElementById("home").style.backgroundColor = "#D926D0"; 
        wonGamesHome++;    
        
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
        wonGamesGuest++;
        
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

// Add results to table
let roundCounter = 0; 
   
    function addResult(sumHome, sumGuest) {
      roundCounter++;
 
      let homeCell = document.getElementById("home-round" + roundCounter);
          homeCell.innerHTML = sumHome;
  
      let guestCell = document.getElementById("guest-round" + roundCounter);
          guestCell.innerHTML = sumGuest;

  
          if (sumHome > sumGuest) {
            homeCell.style.color = "#94D926";
            guestCell.style.color = "D92771";
        
        } else if (sumGuest > sumHome) {
          homeCell.style.color = "D92771";
          guestCell.style.color = "#94D926";
        
        } else {
          homeCell.style.color = "#ffffff";
          guestCell.style.color = "#ffffff";
        }

        // Announcing the champion (overall winning player)
        if (roundCounter === 8) {

        // Hide all elements in container except "New Game" button  
        document.getElementById("container-top").style.visibility = "hidden";
        document.getElementById("home").style.visibility = "hidden";
        document.getElementById("guest").style.visibility = "hidden";
        document.getElementById("winner").style.visibility = "hidden";
        document.getElementById("container-footer").style.visibility = "hidden";
                  
        // Hide buttons in panels
        const buttonsPanel = document.querySelectorAll(".buttons-panel");
        buttonsPanel.forEach(function(panel) {
        panel.style.visibility = 'hidden';
        });


        // Determine who is the champion
        let championName = "";

        if (wonGamesHome > wonGamesGuest) {
          championName = "Home";
          
        } else if (wonGamesHome < wonGamesGuest) {
            championName = "Away";

        } else {
          championName = "Noone";

        }
        

        // Display who is the champion
        const container = document.querySelector(".container");
        const h1 = document.createElement("h1");
        h1.textContent = "The champion";

        const p = document.createElement("p");
        p.id = "championNameId";
         
        const icon = document.createElement("i");
        icon.className = "icon-medal fa-solid fa-medal fa-2xl";

        

        const style = document.createElement ("style");
        style.textContent = `
          h1 {
            font-size: 50px;
            color: #ffffff;  
            margin-top:-600px;
            text-transform: uppercase;            
          }

          .icon-medal {
            margin-top: 100px;
            display:block;
          }

          #championNameId {
            margin: 0;
            padding: 10px;
          }
        `;

          document.head.appendChild(style);
          container.appendChild(h1);
          h1.appendChild(p);
          document.getElementById("championNameId").innerHTML = championName;
          p.appendChild(icon);
          
    } 
}


  








  

