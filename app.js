const city=document.querySelector("#City");
const bttn=document.querySelector("#bttn");

const sunrise=document.querySelector("#sunrise");
const sunset=document.querySelector("#sunset");
const dusk=document.querySelector("#dusk");
const dawn=document.querySelector("#dawn");
const day_length=document.querySelector("#day_length");
const solar_afternoon=document.querySelector("#solar_noon");
const time_zone=document.querySelector("#timezone");

const sunrise1=document.querySelector("#sunrise1");
const sunset1=document.querySelector("#sunset1");
const dusk1=document.querySelector("#dusk1");
const dawn1=document.querySelector("#dawn1");
const day_length1=document.querySelector("#day_length1");
const solar_afternoon1=document.querySelector("#solar_noon1");
const time_zone1=document.querySelector("#timezone1");


let lat=0
let lng=0
const date = new Date().toISOString().split('T')[0];
console.log(date);


const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrow = tomorrowDate.toISOString().split('T')[0];
console.log(tomorrow);

function location3() {
    city.value="NULL"
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function successCallback(position) {
     lat = position.coords.latitude;
     lng = position.coords.longitude;
  
    console.log("Detected Location:", lat, lng);
    API_retrevial(lat,lng);
  }

  function errorCallback(error) {
    console.error("Error getting location:", error);
    alert("Unable to retrieve your location.");
  }

  function location2(city){

    if(city==="none"){
        lat=NaN;
        lng=NaN;
        return;
    }
    else{
    const api_key="b24c58a6b0634ad99d74d653d8e1e1f2";
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${api_key}`).then(response=>response.json()).then( data=>{

    console.log(data)
    if (data.results.length > 0) {
         lat = data.results[0].geometry.lat;
        lng = data.results[0].geometry.lng;
        const timezone = data.results[0].annotations.timezone.name;
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);
        
        API_retrevial(lat,lng,timezone);
      } else {
        console.error("No results found!");
      }
    

})
    }
  }


  async function API_retrevial(lat, lng, timezone) {
    let value = city.value;
    console.log(city.value);
  
    try {
      const responseToday = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=${timezone}&date=${date}`);
      const dataToday = await responseToday.json();
      console.log(dataToday);
  
      sunrise.innerText = dataToday.results.sunrise;
      sunset.innerText = dataToday.results.sunset;
      dusk.innerText = dataToday.results.dusk;
      dawn.innerText = dataToday.results.dawn;
      day_length.innerText = dataToday.results.day_length;
      solar_afternoon.innerText = dataToday.results.solar_noon;
      time_zone.innerText = dataToday.results.timezone;
    } catch (error) {
      console.error("Error fetching today's data:", error);
      alert("Failed to load today's sunrise/sunset data.");
    }
  
    try {
      const responseTomorrow = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=${timezone}&date=${tomorrow}`);
      const dataTomorrow = await responseTomorrow.json();
      console.log(dataTomorrow);
  
      sunrise1.innerText = dataTomorrow.results.sunrise;
      sunset1.innerText = dataTomorrow.results.sunset;
      dusk1.innerText = dataTomorrow.results.dusk;
      dawn1.innerText = dataTomorrow.results.dawn;
      day_length1.innerText = dataTomorrow.results.day_length;
      solar_afternoon1.innerText = dataTomorrow.results.solar_noon;
      time_zone1.innerText = dataTomorrow.results.timezone;
    } catch (error) {
      console.error("Error fetching tomorrow's data:", error);
      alert("Failed to load tomorrow's sunrise/sunset data.");
    }
  }



    






city.addEventListener("input",()=>location2(city.value));
bttn.addEventListener("click",location3);






