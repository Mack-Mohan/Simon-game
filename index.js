var arr = ['green', 'blue', 'yellow', 'red'];
var gameSequence = [];
var userSequence = [];
var level = 0;
var flag = 0;
var i=0;

function checkAnswer(level){

    if(userSequence[level]===gameSequence[level]){
      return 1;
    }
    else{
      return 0;
    }

}


function makeSound(box) { //to make sound
  switch (box) {
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    default:
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
  }
}



function sequence() { // Generating a random sequence
  var x = Math.floor(Math.random() * 4);
  return x;
}
$(document).keypress(function() {
      flag = 1;
      level = 1;
    if (flag) {

      $("h1").text("Level " + level);
      var i = sequence();
      var colorChosen = arr[i];
      gameSequence.push(colorChosen);
      $("." + colorChosen).addClass("pressed");
      setTimeout(function() {
        $("." + colorChosen).removeClass("pressed");
      }, 100);
      makeSound(colorChosen);}});


    $(".btn").click(function(evt) {
      userSequence.push(evt.target.id);
      if(checkAnswer(userSequence.length-1)){
      $("." + evt.target.id).addClass("pressed");
      setTimeout(function() {
        $("." + evt.target.id).removeClass("pressed");
      }, 100);
      makeSound(evt.target.id);
      if(userSequence.length==gameSequence.length){
     setTimeout(function(){
       $("h1").text("Level " + level);
       var i = sequence();
       var colorChosen = arr[i];
       gameSequence.push(colorChosen);
       var len=gameSequence.length;
       $("." + colorChosen).addClass("pressed");
       setTimeout(function() {
         $("." + colorChosen).removeClass("pressed");
       }, 100);
       makeSound(colorChosen);
       userSequence=[];
       level++;
     },500);


      }
  }
      else{
        $("h1").text("Game Over, Press Any Key to reset!!");
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },500);
          flag=0;
          gameSequence=[];
          userSequence=[];
          level=0;

      }

    });
