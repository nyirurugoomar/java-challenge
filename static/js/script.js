// challenge 1: your age in days

// function ageInDays(){
//     var birthYear = prompt('what year were you born... Good friend');
//     var ageInDaycalc =(2021-birthYear)*365;
//     var h1 =document.createElement('h1');
//     var textAnswer = document.createTextNode('You are' + ageInDaycalc + days);
//     h1.setAttribute('id', 'ageInDays');
//     h1.appendChild(textAnswer);
//     document.getElementById('flex-box-result').appendChild(h1);
   
// }

function ageInDays(){
    let age =prompt('What year were you born');
    let result =(2021-age)*365;
    result ='you are ' + result +' days old.';
    document.getElementById('sometext').innerHTML=result;
}


function reset() {
    document.getElementById('sometext').remove();
}

// Challenge 2 :Cat generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    
}
  // challenge 3  rock, paper, scissors

  function rpsGame(yourChoice){
      console.log(yourChoice);
      let humanChoice, botChoice;
    //   humanChoice = yourChoice.id;
    //   botChoice=;
    //results = decideWinner(humanChoice, botChoice);
   // message = finalMessage(results); //you won
   rpsFrontEnd(yourChoice.id, botChoice,message);
   
  }

  function randToRpsInt(){
      return Math.floor(Math.random()*3);

  }

  function numberToChoice(number){
      
  }