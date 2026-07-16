const url = "data/member.json";

const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load members.json");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error(error);

        membersContainer.innerHTML =
            "<p>Unable to load directory information.</p>";
    }
}

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("card");

        let membership = "";

        if (member.level == 1) {
            membership = "Member";
        }
        else if (member.level == 2) {
            membership = "Silver";
        }
        else {
            membership = "Gold";
        }

        card.innerHTML = `
            <img src="${member.img}"
                 alt="${member.name}"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <a href="${member.url}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${membership}</p>

            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);

    });

}

getMembers();


// Grid/List Buttons

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