const npmodal = document.querySelector("#npModal");
const npBtn = document.querySelector("#npBtn");
const closeNp = document.querySelector("#closeNp");

const bronzemodal = document.querySelector("#bronzeModal");
const bronzeBtn = document.querySelector("#bronzeBtn");
const closeBronze = document.querySelector("#closeBronze");
bronzemodal.showModal();


const silvermodal = document.querySelector("#silverModal");
const silverBtn = document.querySelector("#silverBtn");
const closeSilver = document.querySelector("#closeSilver");


const goldmodal = document.querySelector("#goldModal");
const goldBtn = document.querySelector("#goldBtn");
const closeGold = document.querySelector("#closeGold");


npmodal.addEventListener("click", ()=> {
    npmodal.showModal();
})

closeNp.addEventListener("click", ()=>{
    npmodal.close();
})

bronzemodal.addEventListener("click", ()=> {
    bronzemodal.showModal();
})

closeBronze.addEventListener("click", ()=>{
    bronzemodal.close();
})

silvermodal.addEventListener("click", ()=> {
    silvermodal.showModal();
})

closeSilver.addEventListener("click", ()=>{
    silvermodal.close();
})

goldmodal.addEventListener("click", ()=> {
    goldmodal.showModal();
})

closeGold.addEventListener("click", ()=>{
    goldmodal.close();
})
