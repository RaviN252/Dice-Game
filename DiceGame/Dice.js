//player 01 // random number 1-6
var randomNum1=Math.floor(Math.random() * 6) + 1;
//mapping random to images
var randomImageSource = "images/dice" + randomNum1 + ".png";
// img(0)- 1st img update as per random number
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//player 02 // random number 1-6
var randomNum2=Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// main logic - decide who is winner
if(randomNum1 > randomNum2 )
{
  document.querySelector("h1").innerHTML = "player 1 won ";
}
else if (randomNum2 > randomNum1 )
{
  document.querySelector("h1").innerHTML = "player 2 won ";
}else
{
  document.querySelector("h1").innerHTML = "Draw ";
}
