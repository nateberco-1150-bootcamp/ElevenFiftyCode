const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', displaySearchResults); 

function displaySearchResults(e) {
    e.preventDefault()
  var store = document.getElementById("searchStore").value;
  var quantity = document.getElementById("searchQuantity").value;
  var product = document.getElementById("searchProduct").value;

let sentence = "I shoped at " + store + " for " +  quantity + " " + product + "."
 console.log(sentence);
 
  let displaySentence = document.querySelector('.displaySentence')
    displaySentence.innerText = sentence;
 
}


