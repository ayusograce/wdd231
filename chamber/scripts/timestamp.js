// TIMESTAMP FOR THE FORM OF THE JOIN PAGE
const timestamp = document.querySelector("#timestamp");
const now = new Date();

const hour = String(now.getHours()).padStart(2, '0');  
const minute = String(now.getMinutes()).padStart(2, '0');

const formattedDate = `${now.toLocaleDateString('en-EN')} T${hour}:${minute}`;

timestamp.value = formattedDate;

