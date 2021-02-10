'use strict';
function playFun() { 
let seriesList=['cukur','kara sevda','ertugrul','osman'];
console.log(seriesList);
console.log(seriesList.length);

let attempt=5;
let userIn=prompt('Guess My Favorite Turkish Series !!!  ' + (seriesList) );
console.log(userIn);
let corr=false;

while(attempt && !corr){
  for (let i=0 ; i < attempt ; i++){
    if (userIn===seriesList[0]){
      alert('correct answer! ' + seriesList[0]);
      corr=true;
      break;
    }
    attempt-=1;
    userIn=prompt('please try again you have : '+attempt+' remaining!                                    ' + seriesList);
  }
  if (!attempt && userIn===seriesList[0]){
    alert('correct answer! ' + seriesList[0]);
    corr=true;
    break;
  } if(!attempt){
    alert('No more attempts left !!!!');
  }
}
}
playFun();