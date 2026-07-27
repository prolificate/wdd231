const npModal = document.querySelector("#npModal");
const npBtn = document.querySelector("#npBtn");
const closeNp = document.querySelector("#closeNp");

const bronzeModal = document.querySelector("#bronzeModal");
const bronzeBtn = document.querySelector("#bronzeBtn");
const closeBronze = document.querySelector("#closeBronze");

const silverModal = document.querySelector("#silverModal");
const silverBtn = document.querySelector("#silverBtn");
const closeSilver = document.querySelector("#closeSilver");

const goldModal = document.querySelector("#goldModal");
const goldBtn = document.querySelector("#goldBtn");
const closeGold = document.querySelector("#closeGold");

npBtn.addEventListener("click", () => {
    npModal.showModal();
});

closeNp.addEventListener("click", () => {
    npModal.close();
});

bronzeBtn.addEventListener("click", () => {
    bronzeModal.showModal();
});

closeBronze.addEventListener("click", () => {
    bronzeModal.close();
});

silverBtn.addEventListener("click", () => {
    silverModal.showModal();
});

closeSilver.addEventListener("click", () => {
    silverModal.close();
});

goldBtn.addEventListener("click", () => {
    goldModal.showModal();
});

closeGold.addEventListener("click", () => {
    goldModal.close();
});