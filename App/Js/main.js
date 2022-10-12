import {a} from './Quoates.js';
import { sum } from './Quoates.js';
const apikey = "3265874a2c77ae4a04bb96236a642d2f";


// const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


let Quoates="https://api.quotable.io/random";
let timeApi="https://worldtimeapi.org/api/ip/";
 async function getData(url){
  let res= await fetch(url);
  let data=await res.json();
  console.log(data)
 }

    
console.log(getData(Quoates))

console.log(a)


console.log(sum(2,9))