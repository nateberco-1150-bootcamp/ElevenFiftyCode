let url = 'https://rickandmortyapi.com/api/character/';



let images = document.querySelector('body');
// body.appendChild(images); 


    fetch(url)
    .then((res) => res.json())
    .then((json) => displayImages(json));
      
    
function displayImages(json) {
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  

  image1.src = json.results[0].image;
  image2.src = json.results[1].image;
  images.appendChild(image1)
  images.appendChild(image2)
  
}
