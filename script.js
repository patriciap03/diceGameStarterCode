$(document).ready(function(){
  function rolldice(){
  //Place your code here 

  };
  
  $("#roll-dice").click(function(){ 
  var dice1 = Math.random()*6;
  var dice2 = Math.floor(dice1+1);
  
console.log(dice2);
  $("#first-die").removeClass();
  if(dice2===1){
    $("#first-die").addClass("dice-1");
  }
  else if(dice2===2){
    $("#first-die").addClass("dice-2");
  }
   else if(dice2===3){
    $("#first-die").addClass("dice-3");
  }
   else if(dice2===4){
    $("#first-die").addClass("dice-4");
  }
   else if(dice2===5){
    $("#first-die").addClass("dice-5");
  }
   else if(dice2===6){
    $("#first-die").addClass("dice-6");
  }
  
});
  
});
