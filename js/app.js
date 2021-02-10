'use strict';

let userName = prompt('What is your Name??');
console.log(userName);
alert('YOU ARE WELCOME ' + userName + ', you can proceed to my website');
alert('you will be asked many questions in series and you must clarify your answer by y/n or yes/no !!');

let softDev = prompt('Do you think software development course will increase your computer skills ?');
console.log(softDev);

if (softDev.toLowerCase()==='yes' || softDev.toLowerCase()==='y'){
  console.log(softDev);
  alert('thank you');
} else if (softDev.toLowerCase()==='no'|| softDev.toLowerCase()==='n') {
  console.log(softDev);
  let reason1=prompt('please write down the reason...');
  console.log(reason1);
} else{
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  softDev = prompt('Do you think software development course will increase your computer skills ?');
  console.log(softDev);
}

let locationOne=prompt('Do you like to study at campus?');
console.log(locationOne);

if (locationOne.toLowerCase()==='yes' || locationOne.toLowerCase()==='y'){
  console.log(locationOne);
} else if (locationOne.toLowerCase()==='no' || locationOne.toLowerCase()==='n'){
  console.log(locationOne);
  let reason2=prompt('please write down the reason...');
  console.log(reason2);
} else {
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  locationOne=prompt('Do you like to study at campus?');
  console.log(locationOne);
}

let group=prompt('do you like to work in groups?');
console.log(group);

if (group.toLowerCase()==='yes' || group.toLowerCase()==='y'){
  console.log(group);
} else if (group.toLowerCase()==='no' || group.toLowerCase()==='n'){
  console.log(group);
  let reason3=prompt('please write down the reason...');
  console.log(reason3);
} else {
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  group=prompt('do you like to work in groups?');
  console.log(group);
}

let laptop=prompt('do you have your own laptop?');
console.log(laptop);

if (laptop.toLowerCase()==='yes' || laptop.toLowerCase()==='y'){
  console.log(laptop);
} else if (laptop.toLowerCase()==='no'|| laptop.toLowerCase()==='n'){
  console.log(laptop);
  let reason4=prompt('please write down the reason...');
  console.log(reason4);
} else {
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  laptop=prompt('do you have your own laptop?');
  console.log(laptop);
}

alert('YOU ARE WELCOME ' + userName + ', you can proceed to my website');

document.write('THANK YOU ' + userName + ', you discovered my website');
