// alert("Hello there!")
// Made some variables in reference to the elements in the html

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const button = document.getElementById("button");

let apiURL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?type=twopart&amount=10";

// THis function will be used to fetch the data from the above API;
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

// getJokes();


// This function will be used to generate background colors at random 
// on click events

function randomizeColors() {
//     var rgbColor = aqua;
//     red = Math.floor(Math.random() * 250 + 0);
//     green = Math.floor(Math.random() * 250 + 0);
//     blue = Math.floor(Math.random() * 250 + 0);
  
//     rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     document.getElementById("container").style.background = rgbColor;
  
//     red = ("0" + red.toString(16)).substr(-2).toUpperCase();
//     green = ("0" + green.toString(16)).substr(-2).toUpperCase();
//     blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
}
  
  // randomize();




button.addEventListener("click", getJokes);

