// alert("Hello there!")

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const button = document.getElementById("button");

let apiURL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?type=twopart&amount=10";


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


button.addEventListener("click", getJokes);

