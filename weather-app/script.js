const button=document.getElementById('search-button');
const place=document.getElementById('city-name');


const city=document.getElementById('city')
const citytime=document.getElementById('citytime')
const citytemp=document.getElementById('citytemp')

async function getData(cityName) {
   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=35c42ab927bc4a3b85542641251508 &q=${cityName}&aqi=no`);
   return await promise.json()
}

//http://api.weatherapi.com/v1/current.json?key=35c42ab927bc4a3b85542641251508 &q=London&aqi=no

button.addEventListener('click',async()=>{
    const cityName=place.value;
    const result=await getData(cityName)
    console.log(result);
    city.innerText=`${result.location.country},${result.location.name},${result.location.region}`;
    citytime.innerText=`${result.location.localtime}`
    citytemp.innerText=`${result.current.temp_c}`

})