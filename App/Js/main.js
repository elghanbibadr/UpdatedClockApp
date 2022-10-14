 import {generateQuote,QuoateContainer} from './Quoates.js';
let timeApi="https://worldtimeapi.org/api/ip/";
let main=document.querySelector('main');
let footer=document.querySelector('footer');
// Generate a Quoates each time the browser got refreshed our when visiting the page at the first time
 generateQuote();

// let's Generate a new quote for the user when he choice to generate another one
 QuoateContainer.addEventListener('click',(e)=>{
    (e.target.className==="quote__refresh") ? generateQuote():"";
 })

//  =====> timeApi

// lets get data from the time Api
 async function getTimeAndCountry(){
        let res= await fetch(timeApi);
        let data=await res.json();
    //    console.log(data)

    //    append the data by the main element
    let {abbreviation,datetime,day_of_week,day_of_year,timezone,week_number}=data;
    let currentTime=new Date(datetime).toLocaleTimeString();
     let [hour,minute]=currentTime.split(':');
     console.log(hour,minute)
    main.innerHTML=`
    <div class="myRegion">
    <div class="myRegion__timeZone">
     <div class="myRegion__dayPeriod">
        <img src="/App/assets/desktop/icon-sun.svg">
        <h3>GOOD MORNING</h3>
     </div>
     <div class="myRegion__timeContainer">
         <h1 class="myRegion__time">
         ${hour}:${minute}
         </h1>
         <span >${abbreviation}</span>
     </div>
     
      <h2 class="myRegion__country">
       in ${timezone.split("/").pop()}
      </h2>
      <!-- the more and less icon -->
      <div class="myRegion__more">
        <p class="more">More</p>
        <img src="/App/assets/desktop/icon-arrow-up.svg" alt="" class="more-icon">
      </div>
    </div>
</div>`
// add footer html
footer.innerHTML=`
<!-- Second container -->
<div class="myRegion__date">
     <!-- grid container  -->
    <div class="zone row">
        <h4>${timezone}</h4>
        <h2 class="myRegion__name">Africa/Casablanca</h2>
    </div>
    <div class="yearDay row">
        <h4>DAY OF THE YEAR</h4>
        <h2 class="myRegion__dayeOfYear">${day_of_year}</h2>
    </div>
    <div class="weekDay row">
        <h4>DAY OF THE WEEK</h4>
        <h2 class="myRegion__dayOfWeek">${day_of_week}</h2>
    </div>
    <div class="weekNumber row">
        <h4>WEEK NUMBER</h4>
        <h2 class="myRegion__weekNumber">${week_number}</h2>
    </div>
</div> 
`
} 

getTimeAndCountry();
// lets attache an event listener to the more button icon
 main.addEventListener('click',(e)=>{
    if (e.target.classList.contains('more-icon')){
        let footer=document.body.querySelector("footer");
        e.target.classList.toggle('rotateIcon');
        footer.classList.toggle('hidden');
    }
 })

