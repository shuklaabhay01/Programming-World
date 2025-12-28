alert("JS Connected Successfully!");

//for search bar botton

const navSearch = document.getElementById("navSearch");
const searchBtn = document.getElementById("searchBtn");
const languageItems = document.querySelectorAll("#languageList li");
const dropdown = document.querySelector(".dropdown");

function filterLanguages() {
    const value = navSearch.value.toLowerCase();
    dropdown.classList.add("active");

    languageItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "" : "none";
    });
}

navSearch.addEventListener("keyup", filterLanguages);
searchBtn.addEventListener("click", filterLanguages);

