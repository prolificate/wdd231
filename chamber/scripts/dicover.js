import { business } from "../data/business.mjs";

const grid = document.querySelector(".business-section");

business.forEach(discover => {
    const info = document.createElement("article");
    info.classList.add("business-card");

    info.innerHTML = `
        <img src="${discover.images}" alt="${discover.description}" loading="lazy">
        <div class="home">
            <h3>${discover.name}</h3>
            <p><strong>Location:</strong> ${discover.address}</p>
            <p>${discover.description}</p>
            <button>Learn More</button>
        </div>
    `;

    grid.appendChild(info);
});

//message
const message = document.querySelector("#message");
const lastVisit = localStorage.getItem("lastVisit");
const currentDate = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor(
        (currentDate - Number(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (daysBetween < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// Save the current visit date
localStorage.setItem("lastVisit", currentDate);