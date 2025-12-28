alert("JS Connected Successfully!");

//for searching languages in nav bar
const navSearch = document.getElementById("navSearch");
const languageItems = document.querySelectorAll("#languageList li");

navSearch.addEventListener("keyup", () => {
    const value = navSearch.value.toLowerCase();

    // Auto open dropdown when typing
    document.querySelector(".dropdown").classList.add("active");

    languageItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "" : "none";
    });
});