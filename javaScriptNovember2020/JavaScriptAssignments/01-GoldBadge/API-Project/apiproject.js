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
    worldTotalDeaths.innerText = "Deaths: " + world.Global.TotalDeaths
    //Global Confirmed (Total)
    let worldTotalConfirmed = document.querySelector('.worldTotalConfirmed')
    worldTotalConfirmed.innerText = "Confirmed Cases: " + world.Global.TotalConfirmed
    //Global Recovered (Total)
    let worldTotalRecovered = document.querySelector('.worldTotalRecovered')
    worldTotalRecovered.innerText = "Recovered Cases: " + world.Global.TotalRecovered

    //Global Deaths (New)
    let worldNewDeaths = document.querySelector('.worldNewDeaths')
    worldNewDeaths.innerText = "Deaths: " + world.Global.NewDeaths
    //Global Confirmed (New)
    let worldNewConfirmed = document.querySelector('.worldNewConfirmed')
    worldNewConfirmed.innerText = "Confirmed Cases: " + world.Global.NewConfirmed
    //Global Recovered (New)
    let worldNewRecovered = document.querySelector('.worldNewRecovered')
    worldNewRecovered.innerText = "Recovered Cases: " + world.Global.NewRecovered

}

function displayCountryTotals(e){
    e.preventDefault()
   let country = e.target[0].value;
//   country[0].toUpperCase() //TURN FIRST TO UPPERCASE AUTO ??????????????????????????????????????


    // console.log(countries);

    for (i=0; i<countries.length; i++){
        
        if (country === countries[i].Country){
            console.log(countries[i])

    // Country Deaths (Total)
    let countryTotalDeaths = document.querySelector('.countryTotalDeaths')
    countryTotalDeaths.innerText = "Total Deaths: " + countries[i].TotalDeaths
    //Country Confirmed (Total)
    let countryTotalConfirmed = document.querySelector('.countryTotalConfirmed')
    countryTotalConfirmed.innerText = "Total Confirmed Cases: " + countries[i].TotalConfirmed
    //Country Recovered (Total)
    let countryTotalRecovered = document.querySelector('.countryTotalRecovered')
    countryTotalRecovered.innerText = "Total Recovered Cases: " + countries[i].TotalRecovered

    //Country Deaths (New)
    let countryNewDeaths = document.querySelector('.countryNewDeaths')
    countryNewDeaths.innerText = "Total Deaths: " + countries[i].NewDeaths
    //Country Confirmed (New)
    let countryNewConfirmed = document.querySelector('.countryNewConfirmed')
    countryNewConfirmed.innerText = "New Confirmed Cases: " + countries[i].NewConfirmed
    //Country Recovered (New)
    let countryNewRecovered = document.querySelector('.countryNewRecovered')
    countryNewRecovered.innerText = "New Recovered Cases: " + countries[i].NewRecovered

        }

    }


}

countries.style.display = none;




