// Declare variables
var content = document.querySelector("#content");

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films");

var movieNo = 0;

request.onload = function() {
  let data = JSON.parse(this.response);
  console.log(data);

  if (request.status >= 200 && request.status < 400) {
    data.forEach( function (movie) {
      console.log(movie);
      
      let card = document.createElement("div",);
      card.setAttribute('class','card');

      let title = document.createElement("h1");
      title.textContent = movie.title;

      let synopsis = document.createElement("p");
      synopsis.textContent = movie.description;

      content.appendChild(card);
      card.appendChild(title);
      card.appendChild(synopsis);

      //Create button element
      let favButton = document.createElement("button");
      favButton.textContent = "Add to Favourites";

      card.appendChild(favButton);
      favButton.addEventListener("click", function(){
        let key = "fav" + movieNo;
        movieNo++;
        
        let value = card.querySelector("h1").innerHTML;
        console.log(value); 
        console.log(key);
        if (localStorage.getItem(value) != value) {
          localStorage.setItem(key,value);
        }

        updateFavourites();
      });
    } )
    
  } else { // error fallback here (insert error code paragraph)
    let errorMsg = document.createElement("p");
    errorMsg.textContent = "Error - can't retrieve server content"
    content.appendChild(errorMsg);
  }
  
}

updateFavourites();

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
 localStorage.clear();
 updateFavourites();
})

function updateFavourites(){
  let list = document.querySelector("aside ul");
  list.innerHTML = "";
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      // console.log(key, value);
      let listItem = document.createElement("li");
      listItem.textContent = value;
      list.appendChild(listItem);
    }
   }
}


request.send();