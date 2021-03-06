var scroes,
  roundscore,
  activePlayer,
  dice,
  gamePlaying = true;

//console.log(dice);
//document.querySelector("#current-" + activePlayer).textContent = dice;
/*document.querySelector("#current-" + activePlayer).innerHTML =
  "<em>" + dice + "</em>";

var x = document.querySelector("#score-0").textContent;
console.log(x);*/

const newgame = () => {
  scroes = [0, 0];
  roundscore = 0;
  activePlayer = 0;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").innerText = "0";
  document.getElementById("score-1").innerText = "0";
  document.getElementById("current-0").innerText = "0";
  document.getElementById("current-1").innerText = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  gamePlaying = true;
};
newgame();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "/images/dice-" + dice + ".png";

    if (dice !== 1) {
      //add to the global score
      roundscore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundscore;
    } else {
      //next player

      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (gamePlaying) {
    scroes[activePlayer] += roundscore;
    document.querySelector("#score-" + activePlayer).textContent =
      scroes[activePlayer];

    var input = document.querySelector(".final-score").value;

    if (input) {
      var winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scroes[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
      document.querySelector(".dice").style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

const nextPlayer = () => {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundscore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  /*
      document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.add("active");
  */
  document.querySelector(".dice").style.display = "none";
};

document.querySelector(".btn-new").addEventListener("click", newgame);
