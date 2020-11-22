var attributes = ["TackleLost","TackleWon","Interception","Blocks","AerialDuelWon","AerialDuelLost","Save","Punch","Pass","PassFailed",
"ThroughBall","ProgressivePass","KeyPass","Assist","ShotOnTarget","ShotOffTarget","GoalConceded","GoalScored"];

var players = ["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11"];

var currPlayer = 0;

function attributeCounter(attributeIndex){
  var playerAttributeId = currPlayer + attributes[attributeIndex];
  document.getElementById(playerAttributeId).innerHTML = parseInt(document.getElementById(playerAttributeId).innerHTML) + 1;
}

function choosePlayer(playerNumber){
  console.log(playerNumber);
  currPlayer = players[playerNumber];
  console.log(currPlayer);
}
