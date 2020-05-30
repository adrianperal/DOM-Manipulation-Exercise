var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var rstBtn = document.querySelector("#reset");
var winnerScore = document.querySelector("input[type='number']");
var p1Count = document.querySelector("#sp1");
var p2Count = document.querySelector("#sp2");
var winCount = document.querySelector("#wScount");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

winnerScore.addEventListener("change", function(){
  winCount.textContent = this.value;
  winScore = Number(this.value);
  resetGame();
});

p1Btn.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    p1Count.textContent = p1Score;
    console.log("Player 1 Scored!");
    if (p1Score === winScore) {
      gameOver = true;
      alert("Player 1 Wins the Game!");
      console.log("Player 1 Won!!");
      p1Count.classList.add("win");
    }
  }
});

p2Btn.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    p2Count.textContent = p2Score;
    console.log("Player 2 Scored!");
    if (p2Score === winScore) {
      gameOver = true;
      alert("Player 2 Wins the Game!");
      console.log("Player 2 Won!!");
      p2Count.classList.add("win");
    }
  }
});

rstBtn.addEventListener("click", function(){
  resetGame();
  winCount.textContent = "5";
  winScore = 5;
  winnerScore.value = '';
});

function resetGame(){
  p1Score = 0;
  p2Score = 0;
  p1Count.textContent = 0;
  p2Count.textContent = 0;
  p1Count.classList.remove("win");
  p2Count.classList.remove("win");
  gameOver=false;
  console.clear();
}