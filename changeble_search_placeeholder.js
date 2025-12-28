//changeble_search_placeeholder.js
const searchInput = document.getElementById("navSearch");

const placeholders = [
    "Search Python course...",
    "Search Java programming...",
    "Search C / C++ / C#...",
    "Search Web Development...",
    "Search AI & Machine Learning...",
    "Search Data Science..."
];

let index = 0;

setInterval(() => {
    // Change placeholder only if input is empty
    if (searchInput.value === "") {
        searchInput.placeholder = placeholders[index];
        index = (index + 1) % placeholders.length;
    }
}, 2000); // 2 seconds


//new code for changeble floating placeholder
const input = document.getElementById("navSearch");
const label = document.querySelector(".floating-search label");

const texts = [
    "Search Python",
    "Search Java",
    "Search C / C++ / C#",
    "Search AI & ML",
    "Search Web Development"
];

let i = 0;

setInterval(() => {
    if (input.value === "") {
        label.textContent = texts[i];
        i = (i + 1) % texts.length;
    }
}, 2000);
