


let boton = document.querySelector("#subscribe");
let form = document.querySelector(".form");
let close = document.querySelector("#closeModal");
let modal = document.querySelector("#thank-you");


form.addEventListener("submit", (x) =>{
    x.preventDefault();
    modal.showModal();
});


closeModal.addEventListener("click", () => {
    modal.close();
})
