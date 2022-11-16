
var randomNumber1=Math.floor(Math.random()*5+2);
var randomNumber2=Math.floor(Math.random()*5+2);

var randomImageSource1="images/dice"+randomNumber1+".png";
var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelector("img").setAttribute("src",randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
} else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
} else{ document.querySelector("h1").innerHTML="Draw";
}
