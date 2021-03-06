// alert("Hello there!")
// Made some variables in reference to the elements in the html

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const button = document.getElementById("button");

let apiURL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?type=twopart&amount=10";

// This function will be used to fetch the data from the above API;
// It will also render the data in the container div when called inside the 
// event listener below.

function getJokes(){
    fetch(apiURL)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        quotes.innerHTML = data.jokes[0].setup;
        author.innerHTML = data.jokes[0].delivery;
        //console.log(data.jokes[0].delivery);
    })
}


// This function will be used to generate background colors at random 
// on click events

function randomizeColors() {
    var rgbColor = "";
    red = Math.floor(Math.random() * 250 + 0);
    green = Math.floor(Math.random() * 250 + 0);
    blue = Math.floor(Math.random() * 250 + 0);
  
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("container").style.background = rgbColor;
  
    red = ("0" + red.toString(16)).substr(-2).toUpperCase();
    green = ("0" + green.toString(16)).substr(-2).toUpperCase();
    blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
}
  


// Added a click event listener for the getJokes function.
button.addEventListener("click", getJokes);


//Added an event listener for the random colors function.
button.addEventListener("click", randomizeColors);

//These next two functions and their event listeners change the
// colors and the font weight of the button element to green and 
// aqua on mouse over and on mouse out events. 

function btnHovOver(){
    button.style.backgroundColor = "greenyellow";
    button.style.fontWeight = "1000";
}

function btnHovOut(){
    button.style.backgroundColor = "aqua";
    button.style.fontWeight = "600";

}

button.addEventListener("mouseover", btnHovOver);
button.addEventListener("mouseout", btnHovOut);