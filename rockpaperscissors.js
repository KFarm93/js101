function draw() {
  console.log("Draw.");
}

function player1wins() {
  console.log("Player 1 wins!");
}

function player2wins() {
  console.log("Player 2 wins!");
}


function rockPaperScissors(throw1, throw2) {
  var rock = "rock";
  var paper = "paper";
  var scissors = "scissors";
  if (throw1 === throw2) {
    return draw();
  }
  if (throw1 === rock) {
    if (throw2 === paper) {
      return player2wins();
    }
    else {
      return player1wins();
    }
  }
  else if (throw1 === paper) {
    if (throw2 === scissors) {
      return player2wins();
    }
    else {
      return player1wins();
    }
  }
  else if (throw1 === scissors) {
    if (throw2 === rock) {
      return player2wins();
    }
    else {
      return player1wins();
    }
  }
}

rockPaperScissors('rock', 'scissors');
