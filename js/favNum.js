'use strict';

let attempts=3;
let userInput=prompt('Guess my Favorite Number between 1 to 10 !!!');
console.log(userInput);
let correct=false;
while(attempts && !correct){
  for (let i=0 ; i < attempts ; i++){
    if (Number(userInput)===5){
      alert('correct answer!');
      correct=true;
      break;
    } else if (Number(userInput)>5){
      alert('too high');
    } else if (Number(userInput)<5){
      alert('too low');
    }
    attempts-=1;
    userInput=prompt('please try again you have : '+attempts+' remaining!');
    console.log(userInput);
  }
  if (!attempts && Number(userInput)===5){
    alert('correct answer!');
    correct=true;
  } else if(!attempts){
    alert('My favorite number is 5');
    break;
  }
}
