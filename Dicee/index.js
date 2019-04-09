// img1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var image1 =document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Condition
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}