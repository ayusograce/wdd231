const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
    <p>Application for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Your email is ${myInfo.get('email')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Business/Organization: ${myInfo.get('organization')}</p>
    <p>Application sent: ${myInfo.get('timestamp')}</p>
    `