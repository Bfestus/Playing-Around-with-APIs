const quoteText  = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteButtn = document.querySelector("button"),
soundButtn = document.querySelector(".sound"),
copyButtn = document.querySelector(".copy"),
twitterButtn = document.querySelector(".twitter");

// creating random quote function
function randomQuote(){
    quoteButtn.classList.add("loading");
    quoteButtn.innerText = 'Loading...'
    // console.log("clicked")

    //fetching quotable api/ random quotes from API and parsing it into JavaScript object
    // by lukePeavey on github
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteButtn.innerText = 'New Quote';
        quoteButtn.classList.remove("loading");
    });

}

// lets work on the sound 
soundButtn.addEventListener("click", ()=>{
    // representing the speech request 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance)
});


quoteButtn.addEventListener("click", randomQuote);