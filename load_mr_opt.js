//for load more curses button

const cards = document.querySelectorAll(".course-card");
const loadMore = document.getElementById("load-more");
let visible = 3;

// show first 3 cards
for (let i = 0; i < visible; i++) {
    if (cards[i]) cards[i].classList.add("show");
}

loadMore.onclick = () => {
    let next = visible + 3;

    for (let i = visible; i < next; i++) {
        if (cards[i]) cards[i].classList.add("show");
    }

    visible = next;

    if (visible >= cards.length) {
        loadMore.style.display = "none";
    }
}
console.log("Visible:", visible, "Total:", cards.length);

