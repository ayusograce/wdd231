// ALMACENING THE LAST VISIT AND COMPARING IT TO THE DATE OF THE ACTUAL VISIT TO KNOW
// HOW MANY DAYS HAS BEEN SINCE THE LAST TIME THE USER VISITED THE PAGE

function lastVisitMessage(){
  const lastVisit = localStorage.getItem("lastVisit");
  const today = new Date();
  const msToDays = 86400000;
  const section = document.querySelector("#visit-section")
  let message;

  if (lastVisit){
    const lastVisitDate = new Date(lastVisit);
    const difference = today - lastVisitDate;
    const days = Math.floor(difference / msToDays);

      if (days === 0){
        message = "Back so soon! Awesome!";
      } else if(days === 1){
        message = "You last visited 1 day ago.";
      } else {
        message = `You last visited ${days} days ago.`
      }
    
  } else{
    message = "Welcome! Let us know if you have any questions."
  }

  section.textContent = message;
  localStorage.setItem("lastVisit", today.toISOString());
}

lastVisitMessage();