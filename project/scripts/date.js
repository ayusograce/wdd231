
// Current year
export function insertCurrentYear(selector = "#currentyear") {
    const currentyear = document.querySelector(selector);
    const today = new Date();
    if (currentyear) {
      currentyear.innerHTML = `&#169;<span class="highlight">${today.getFullYear()}</span>` + currentyear.textContent;
    }
}

// Last modified date
export function insertLastModified(selector = "#lastModified") {
    const date = document.querySelector(selector);
    const lastModified = document.lastModified;
    if (date) {
      date.textContent = `Last modification: ${lastModified}`;
    }
}