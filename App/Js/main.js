

const apikey = "3265874a2c77ae4a04bb96236a642d2f";


const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


let Quoates="https://api.quotable.io/random";
 let timeApi="https://worldtimeapi.org/api/ip/";

fetch(timeApi)
.then(res=>res.json())
.then(data=>console.log(data))
