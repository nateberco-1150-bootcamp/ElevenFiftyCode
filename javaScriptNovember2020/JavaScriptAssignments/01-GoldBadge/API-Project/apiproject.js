let url = "https://api.covid19api.com/summary";



//SEARCH FORM
// const searchCountry = document.querySelector('.searchCountry'); //pulling id or class???
const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', displayCountryTotals); 

let countries;

fetch(url)
.then(result => result.json())
.then(json => {
    console.log(json);
    countries = json.Countries;
    displayWorldTotals(json);
})

    //***This sections displays the data of global totals (deaths, confirmed, recovered) */
function displayWorldTotals(world){
    //Global Deaths (Total)
    let worldTotalDeaths = document.querySelector('.worldTotalDeaths')
    worldTotalDeaths.innerText = "Deaths: " + world.Global.TotalDeaths.toLocaleString()
    //Global Confirmed (Total)
    let worldTotalConfirmed = document.querySelector('.worldTotalConfirmed')
    worldTotalConfirmed.innerText = "Confirmed Cases: " + world.Global.TotalConfirmed.toLocaleString()
    //Global Recovered (Total)
    let worldTotalRecovered = document.querySelector('.worldTotalRecovered')
    worldTotalRecovered.innerText = "Recovered Cases: " + world.Global.TotalRecovered.toLocaleString()

    //Global Deaths (New)
    let worldNewDeaths = document.querySelector('.worldNewDeaths')
    worldNewDeaths.innerText = "Deaths: " + world.Global.NewDeaths.toLocaleString()
    //Global Confirmed (New)
    let worldNewConfirmed = document.querySelector('.worldNewConfirmed')
    worldNewConfirmed.innerText = "Confirmed Cases: " + world.Global.NewConfirmed.toLocaleString()
    //Global Recovered (New)
    let worldNewRecovered = document.querySelector('.worldNewRecovered')
    worldNewRecovered.innerText = "Recovered Cases: " + world.Global.NewRecovered.toLocaleString()

}

function displayCountryTotals(e){
    e.preventDefault()
   let country = e.target[0].value;
   let capCountry = country.charAt(0).toUpperCase() + country.slice(1)
   


    // console.log(countries);

    for (i=0; i<countries.length; i++){
        
        if (capCountry === countries[i].Country){
            console.log(countries[i])

    // Country Deaths (Total)
    let countryTotalDeaths = document.querySelector('.countryTotalDeaths')
    countryTotalDeaths.innerText = "Deaths: " + countries[i].TotalDeaths.toLocaleString()
    //Country Confirmed (Total)
    let countryTotalConfirmed = document.querySelector('.countryTotalConfirmed')
    countryTotalConfirmed.innerText = "Confirmed Cases: " + countries[i].TotalConfirmed.toLocaleString()
    //Country Recovered (Total)
    let countryTotalRecovered = document.querySelector('.countryTotalRecovered')
    countryTotalRecovered.innerText = "Recovered Cases: " + countries[i].TotalRecovered.toLocaleString()

    //Country Deaths (New)
    let countryNewDeaths = document.querySelector('.countryNewDeaths')
    countryNewDeaths.innerText = "Deaths: " + countries[i].NewDeaths.toLocaleString()
    //Country Confirmed (New)
    let countryNewConfirmed = document.querySelector('.countryNewConfirmed')
    countryNewConfirmed.innerText = "Confirmed Cases: " + countries[i].NewConfirmed.toLocaleString()
    //Country Recovered (New)
    let countryNewRecovered = document.querySelector('.countryNewRecovered')
    countryNewRecovered.innerText = "Recovered Cases: " + countries[i].NewRecovered.toLocaleString()

        }

    }


}






