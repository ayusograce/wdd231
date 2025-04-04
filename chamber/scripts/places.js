const datos = './data/places.json';
const showHere = document.querySelector(".places-photos");

async function getData(){
    try{
        const response = await fetch(datos);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayItems(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayItems(datos) {
    showHere.innerHTML = "";
    (datos.places || []).forEach(x => {
        const thecard = document.createElement('section');

        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.name;
        thephoto.width = 300;
        thephoto.height = 200;
        thecard.appendChild(thephoto);

        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);

        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        const thebutton = document.createElement('button');
        thebutton.innerText = "Learn More";
        thebutton.addEventListener("click", function() {
            window.location.href = x.url;
          });
        thecard.appendChild(thebutton);

        showHere.appendChild(thecard);

    });
}

getData();

