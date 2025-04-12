const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
    <p>New member: ${myInfo.get('name')}</p>
    <p>Your email: ${myInfo.get('email')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    `