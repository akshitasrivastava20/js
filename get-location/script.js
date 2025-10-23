const button=document.getElementById('get-location-button');


async function gotLocation(position){
 const result=await getWeather(position.coords.latitude,position.coords.longitude);
 console.log(result)
}
function failedToGet(){
    console.log('there waqs some issue')
}
//http://api.weatherapi.com/v1/current.json?key=35c42ab927bc4a3b85542641251508&q=London&aqi=no


async function getWeather(lat,long) {

    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=35c42ab927bc4a3b85542641251508&q=${lat},${long}&aqi=no`);
    return await promise.json();
}
button.addEventListener('click',async()=>{
     navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
})