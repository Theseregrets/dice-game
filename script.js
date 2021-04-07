'use strict';

var scores, roundScore, activePlayers;
scores = [0,0];
roundScore = 0;
activePlayers = 0;

//var dice = Math.floor(Math.random()*6)+1;

//

document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
document.querySelector("#current--0").textContent = 0;
document.querySelector("#current--1").textContent = 0;

document.querySelector(".btn--roll").addEventListener("click", function(){
  var dice = Math.floor(Math.random()*6)+1;


  var diceDOM = document.querySelector(".dice")
  diceDOM.style.display = 'block'
  diceDOM.src = 'dice-'+dice+'.png'

  if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector("#current--" + activePlayers).textContent = roundScore;
  }else{
    //switch Player
    activePlayers === 0? activePlayers = 1 : activePlayers = 0;
    roundScore = 0;
  }
});
