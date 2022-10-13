 import {generateQuote,QuoateContainer} from './Quoates.js';
let timeApi="https://worldtimeapi.org/api/ip/";

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
       console.log(data)
} 

getTimeAndCountry()