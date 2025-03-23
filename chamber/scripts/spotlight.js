const datos = './data/members.json';
const spotlightCards = document.querySelector("#spotlight");

async function getSpotlightData(){
    try{
        const response = await fetch(datos);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createSpotlightCards(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function createSpotlightCards(datos){
    spotlightCards.innerHTML = "";

    let companies = datos.members || [];

    let highLevel = companies.filter(dato => dato.membership === "Gold" || dato.membership === "Silver");

    let highLevelCompanies = getRandomCompanies(highLevel, 3);

    highLevelCompanies.forEach(dato => {
        let spotlightSection = document.createElement("section");

        let companyName = document.createElement("p");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let level = document.createElement("p");
        let email = document.createElement("a");

        companyName.textContent = dato.name;

        logo.setAttribute("src", dato.image);
        logo.setAttribute("alt", `Logo of ${dato.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '80');

        address.textContent = dato.address;
        phone.textContent = dato.phoneNumber;

        level.textContent = `MEMBERSHIP: ${dato.membership}`;

        email.textContent = dato.websiteURL;
        email.setAttribute("href", dato.websiteURL);

    
        spotlightSection.appendChild(companyName);
        spotlightSection.appendChild(logo);
        spotlightSection.appendChild(address);
        spotlightSection.appendChild(phone);
        spotlightSection.appendChild(level);
        spotlightSection.appendChild(email);
        

        spotlightCards.appendChild(spotlightSection);
        });
}

function getRandomCompanies(array, numCompanies){
    let random = array.sort(() => 0.5 - Math.random());
    return random.slice(0, numCompanies);
}

getSpotlightData();