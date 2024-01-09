const firstRandomNumber=Math.floor(Math.random()*6) +1
const firstDiceImage='images/dice' + firstRandomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);


const secondRandomNumber=Math.floor(Math.random()*6) +1
const secondDiceImage='images/dice' + secondRandomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

const thirdRandomNumber=Math.floor(Math.random()*6) +1
const thirdDiceImage='images/dice' + thirdRandomNumber + '.png';
document.querySelectorAll('img')[2].setAttribute('src',thirdDiceImage);

if(firstRandomNumber===secondRandomNumber && secondRandomNumber===thirdRandomNumber){
    document.querySelector('h1').innerHTML='Its Draw';
}
else if(firstRandomNumber>=secondRandomNumber && firstRandomNumber>=thirdRandomNumber){
    document.querySelector('h1').innerHTML='The Winner is Player 1';
}
else if(secondRandomNumber>=firstRandomNumber && secondRandomNumber>=thirdRandomNumber){
    document.querySelector('h1').innerHTML='The Winner is Player 2'; 
}
else{
    document.querySelector('h1').innerHTML='The Winner is Player 3'; 
}
