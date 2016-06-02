var choices = ["rock", "paper" , "scissors"]

var userAnswer = prompt("rock, paper, or scissors?").toLowerCase;
var computerAnswer = choices[parseInt(Math.random()*10)%3]

console.log(computerAnswer);
console.log(userAnswer);

if(userAnswer === "rock" && computerAnswer === "scissors"){
  console.log("User wins. Rock beats paper");
}
  else if (userAnswer === "rock" && computerAnswer === "paper") {
  console.log("Computer wins. Paper beats rock.");
}
  else if (userAnswer === "rock" && computerAnswer === "rock" ) {
    console.log("It's a tie!");
  }
  else if (userAnswer === "paper" && computerAnswer === "rock"){
    console.log("you win. Paper beats rock.") ;
    }
    else if (userAnswer === "paper" && computerAnswer === "paper"){
      console.log("It's a tie.");
    }
  }
