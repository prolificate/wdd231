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

