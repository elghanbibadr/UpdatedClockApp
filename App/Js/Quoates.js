//Needed Variable for the Quote section
export let QuoateContainer=document.querySelector('.quotesContainer');
let QuoatesApi="https://api.quotable.io/random";
export let quoteRefreshIcon=QuoateContainer.querySelector('.quote__refresh');

// First when the page got refreshed we need to generate a default quoate

 export async function generateQuote(){
        let res= await fetch(QuoatesApi);
        let data=await res.json();
        // console.log(data)
        let {content,author}=data;
     QuoateContainer.innerHTML=`<div class="quote__content">
     <p class="quote__text">${content}</p>
     <h4 class="quote__author">${author}</h4>
   </div>
   <img src="/App/assets/desktop/icon-refresh.svg" alt="quote icon-refresh" class="quote__refresh">`
}


