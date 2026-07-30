import { business } from "../data/business.mjs";

const grid = document.querySelector(".discover");

grid.forEach(discover => {
    const info = document.createElement("article");
    info.classList.add("info");

    info.innerHTML='<img src = "${discover.images}" alt = "${discover.description}" loading= "lazy"> <div class= "infoContent"> <h2>${discover.name}</h2> <p><strong>Location:</strong> {discover.address}</p> <button>Learn More </button>';

    grid.appendChild(info);
});