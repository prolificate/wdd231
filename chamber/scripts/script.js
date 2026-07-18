const url = "data/members.json";

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

        if (member.membership === 1) {
            membership = "Member";
        } else if (member.membership === 2) {
            membership = "Silver Member";
        } else if (member.membership === 3) {
            membership = "Gold Member";
        }

        card.innerHTML = `
            <img src="${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p><strong>📍 Address:</strong> ${member.address}</p>

            <p><strong>📞 Phone:</strong> ${member.phone}</p>

            <p>
                <strong>🌐 Website:</strong>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>🏆 Membership:</strong> ${membership}</p>
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

    gridButton.classList.add("active");
    listButton.classList.remove("active");

});

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

    listButton.classList.add("active");
    gridButton.classList.remove("active");

});