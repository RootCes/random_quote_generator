console.log('connected!')

const text=document.getElementById("quote");
const author=document.getElementById("author");
const button=document.getElementById("nextonclick");


const getNewQuote = async () =>
{
    let url = "https://type.fit/api/quotes"; //api for quotes   
    const response = await fetch(url);// fetch the data from api
    console.log(typeof response);
    const allQuotes = await response.json();//convert response to json and store it in quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);// Generates a random number between 0 and the length of the quotes array
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;
    
    if(auth==null){
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML = quote;
    author.innerHTML = "~ "+auth;  

}
button.onclick = getNewQuote;
getNewQuote();