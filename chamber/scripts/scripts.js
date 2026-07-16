const url = "data/members.json";
const main = document.querySelector("#main");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");


const url = "data/members.json";

const membersContainer = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("card");
        let level = "";
        if (member.membership === 1) {
            level = "Member";
        } else if (member.membership === 2) {
            level = "Silver";
        } else {
            level = "Gold";
        }

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${level}</p>

            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);

    });

}

getMembers();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

});

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;