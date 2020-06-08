var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png" //dice1.png - dice6.png

var randomImageSource2 = "images/dice" + randomNumber2 + ".png" //images/dice1.png - images/dice6.png





document.querySelector(".img1").setAttribute("src", randomImageSource1);

document.querySelector(".img2").setAttribute("src", randomImageSource2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = ("🚩Player 1 wins!");
}
else if (randomNumber1 < randomNumber2){
  heading.innerHTML = ("Player 2 wins!🚩")
}
else {
  heading.innerHTML= ("Draw!");
}
