const year = [
    {
        month: "January",
        title: "The Magician's Nephew",
        author: "C.S. Lewis",
        summary: "One cold, wet summer in London, Digory and Polly meet and become fast friends. Their lives take a sudden turn when Digory’s Uncle Andrew, who fancies himself a magician, sends them hurtling to... somewhere else. They arrive in Narnia, just as it is born from the song of the great Lion, Aslan. Along the way, they encounter the evil sorceress Jadis, whose dark magic threatens everything. After a whirlwind adventure, they finally find their way back home.",
        cover: "narnia-1.webp",
        urlBuy: "https://www.amazon.com/gp/product/0060764902/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060764902&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
        urlReview: "https://www.goodreads.com/book/show/65605.The_Magician_s_Nephew"
    },
    {
        month: "February",
        title: "Emily Wilde's Encyclopaedia of Faeries",
        author: "Heather Fawcett",
        summary: "A curmudgeonly professor journeys to a small town in the far north to study faerie folklore and discovers dark fae magic, friendship, and love in the start of a heartwarming and enchanting new fantasy series. Cambridge professor Emily Wilde is good at many things: She is the foremost expert on the study of faeries. She is a genius scholar and a meticulous researcher who is writing the world's first encyclopaedia of faerie lore.",
        cover: "emily-wilde.webp",
        urlBuy: "https://www.amazon.com/gp/product/059350013X/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=059350013X&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
        urlReview: "https://www.goodreads.com/book/show/60657589-emily-wilde-s-encyclopaedia-of-faeries"
    },
    {
        month: "March",
        title: "The Midnight Library",
        author: "Matt Haig",
        summary: "Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. But things are about to change. Before time runs out, she must answer the ultimate question: what is the best way to live?",
        cover: "midnight-library.webp",
        urlBuy: "https://www.amazon.com/gp/product/0525559477/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0525559477&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
        urlReview: "https://www.goodreads.com/book/show/52578297-the-midnight-library"
    }
]

createBooksCards(year);

function createBooksCards(array){
    let space = document.querySelector("#booksyear");

    array.forEach(book => {
        let card = document.createElement("div");
    
        let titulo = document.createElement("h3");
        let descripcion = document.createElement("p");
        let imagen = document.createElement("img");
        let goodreads = document.createElement("button");
        let comprar = document.createElement("button");

        titulo.textContent = `${book.month}: ${book.title}`;
        descripcion.textContent = book.summary;

        imagen.src = `images/${book.cover}`;
        imagen.alt = book.title;
        imagen.width = 250;
        imagen.height = 400;
        imagen.loading = "lazy";

        goodreads.innerText = "Read More";
        goodreads.id = "goodreads";
        goodreads.addEventListener("click", function() {
            window.location.href = book.urlReview;
          });
        comprar.innerHTML = "Buy book";
        comprar.id = "comprar";
        comprar.addEventListener("click", function() {
            window.location.href = book.urlBuy;
          });

        card.appendChild(imagen);
        card.appendChild(titulo);
        card.appendChild(descripcion);
        card.appendChild(goodreads);
        card.appendChild(comprar);

        space.appendChild(card);
    });
}