'use strict';
let userName = prompt('What is your Name??');
console.log(userName);
alert('YOU ARE WELCOME ' + userName + ',you can proceed to my website');
alert('you will be asked many questions in series and you must clarify your answer by y/n or yes/no !!');

let softdev = prompt('Do you think software development course will increase your computer skills ?');
console.log(softdev);

if (softdev.toLowerCase()==='yes' || softdev.toLowerCase()==='y'){
  console.log(softdev);
  alert('thank you');
} else if (softdev.toLowerCase()==='no'|| softdev.toLowerCase()==='n') {
  console.log(softdev);
  let reason1=prompt('please write down the reason...');
  console.log(reason1);
} else{
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  softdev = prompt('Do you think software development course will increase your computer skills ?');
  console.log(softdev);
}

let locationone=prompt('Do you like to study at campus?');
console.log(locationone);

if (locationone.toLowerCase()==='yes' || locationone.toLowerCase()==='y'){
  console.log(locationone);
} else if (locationone.toLowerCase()==='no' || locationone.toLowerCase()==='n'){
  console.log(locationone);
  let reason2=prompt('please write down the reason...');
  console.log(reason2);
} else {
  alert('!!! Kindly answer the question with y/n or yes/no !!!');
  locationone=prompt('Do you like to study at campus?');
  console.log(locationone);
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
