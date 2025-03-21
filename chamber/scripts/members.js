const members = './data/members.json';
const cards = document.querySelector('#cards');

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");


gridbutton.addEventListener("click", async () => {
    const data = await getMembersData();
    displayMembersGrid(data.members);
});


listbutton.addEventListener("click", async () => {
    const data = await getMembersData();
    displayMembersList(data.members);
})

async function getMembersData(){
    const response = await fetch(members);
    const data = await response.json();
    return data;
}

const displayMembersGrid = (members) => {
    cards.innerHTML = "";
    cards.classList.add("grid");
    cards.classList.remove("list");

    members.forEach(member => {
        let card = document.createElement("section");
        // let companyName = document.createElement("p");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("a");

        // companyName.textContent = member.name;

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '80');

        address.textContent = member.address;
        phone.textContent = member.phoneNumber;

        email.textContent = member.websiteURL;
        email.setAttribute("href", member.websiteURL);

        // card.appendChild(companyName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
    
        cards.appendChild(card);

    });
};

const displayMembersList = (members) => {
    cards.innerHTML = "";
    cards.classList.add("list");
    cards.classList.remove("grid");

    members.forEach(member => {
        let row = document.createElement("div");
        row.classList.add("list-row");

        let companyName = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("a");

        companyName.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phoneNumber;

        email.textContent = member.websiteURL;
        email.setAttribute("href", member.websiteURL);

        row.appendChild(companyName);
        row.appendChild(address);
        row.appendChild(phone);
        row.appendChild(email);
    
        cards.appendChild(row);
    });
};

document.addEventListener("DOMContentLoaded", async () =>{
    const data = await getMembersData();
    displayMembersGrid(data.members);
});
