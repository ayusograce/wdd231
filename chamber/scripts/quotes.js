// GET A RANDOM QUOTE FROM DE QUOTES DATA IN THE JSON FILE.

const datos = './data/quotes.json';
const quotesCard = document.querySelector(".quote");

async function getQuotesData(){
    try{
        const response = await fetch(datos);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createQuotesCards(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function createQuotesCards(datos){
    quotesCard.innerHTML = "";

    let citas = datos.quotes || [];

    let randomQuote = getRandom(citas)[0];

    let card = document.createElement("div");
    let actualQuote = document.createElement("p");
    let authorBook = document.createElement("p");

    actualQuote.textContent = randomQuote.quote;
    authorBook.setAttribute("class", 'author');
    authorBook.textContent = `-${randomQuote.author} (${randomQuote.book})`;

    card.appendChild(actualQuote);
    card.appendChild(authorBook);

    quotesCard.appendChild(card);
}

function getRandom(array){
    let random = array.sort(() => 0.5 - Math.random());
    return random.slice(0, 1);
}

getQuotesData();