 import {generateQuote,QuoateContainer} from './Quoates.js';
const apikey = "3265874a2c77ae4a04bb96236a642d2f";
let timeApi="https://worldtimeapi.org/api/ip/";

// Generate a Quoates each time the browser got refreshed our when visiting the page at the first time
 generateQuote();
 
// let's Generate a new quote for the user when he choice to generate another one
 QuoateContainer.addEventListener('click',(e)=>{
    (e.target.className==="quote__refresh") ? generateQuote():"";
 })



