// //Tracking the number of reviews
document.addEventListener("DOMContentLoaded", () => {
    const reviewsDisplay = document.querySelector(".counter");
  
    if (!reviewsDisplay) return;
  
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  
    if (numReviews === 0){
      reviewsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
    else{
      reviewsDisplay.textContent = `${numReviews}`;
    }
  
    numReviews++;
  
    localStorage.setItem("numReviews-ls", numReviews);
  });