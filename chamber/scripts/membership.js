// MEMBERSHIP INFORMATION AND FUNCTIONS TO SHOW IN THE JOIN PAGE

const membership = [
    {
        nameLevel: "Non Profit Membership Level",
        price: "$0",
        benefits: [
            'Inclusion in the member directory',
            'Access to basic networking events',
            'Opportunity to collaborate in community events',
            'Access to newsletters with opportunities'
        ]
    },
    {
        nameLevel: "Bronze Membership Level",
        price: "$10",
        benefits: [
            'Everything in Non Profit Membership, plus:',
            'Discounts on the chamber events',
            'Access to training programs and workshops',
            'Opportunity to share posts on the official social media pages'
        ]
    },
    {
        nameLevel: "Silver Membership Level",
        price: "$20",
        benefits: [
            'Everything in Bronze Membership, plus:',
            'Enhanced visibility in the main page',
            'Sponsorship opportunities for events',
            'Priority access to events'
        ]
    },
    {
        nameLevel: "Gold Membership Level",
        price: "$30",
        benefits: [
            'Everything in Silver Membership, plus:',
            'Opportunity to be a speaker at events or workshops',
            'Personalized business growth consulting',
            'Invitation to VIP meetings with business leaders'
        ]
    }
]

createLevelCards(membership);

function createLevelCards(levels){
    // document.querySelector("#membership-levels");

    levels.forEach(level => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let boton = document.createElement("button");

        name.textContent = level.nameLevel;
        boton.textContent = `Learn More`;

        card.appendChild(name);
        card.appendChild(boton);

        document.querySelector("#membership-levels").appendChild(card);

        boton.addEventListener("click", () =>{
            displayMembershipDetails(level);
        });

    });
}

const LevelsDetails = document.querySelector("#levels-details");

// ESTO ES PARA EL MODAL QUE APARECE CUANDO SE CLICKEAN LOS CURSOS
function displayMembershipDetails(level){
    LevelsDetails.innerHTML = "";
    LevelsDetails.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${level.nameLevel}</h2>
        <h3><strong>Price</strong>: ${level.price}</h3>
        <p><strong>Benefits</strong>:</p>
        <li>${level.benefits[0]}</li>
        <li>${level.benefits[1]}</li>
        <li>${level.benefits[2]}</li>
        <li>${level.benefits[3]}</li>
    `;
    LevelsDetails.showModal();

    closeModal.addEventListener("click", () => {
        LevelsDetails.close();
    });
}
