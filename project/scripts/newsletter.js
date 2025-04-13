// OPEN AND CLOSE MODAL FOR THE SUBMISSION OF NEWSLETTER AND MESSAGE FORMS
// let boton = document.querySelector("#subscribe");
let form = document.querySelector(".form");
let close = document.querySelector("#closeModal");
let modal = document.querySelector("#thank-you");


export function openModal() {
    form.addEventListener("submit", (x) => {
        x.preventDefault();
        modal.showModal();
    });
}

export function closeModal() {
    close.addEventListener("click", () => {
        modal.close();
    });
}

openModal();
closeModal();