// Hamburger Menu
const menuButton = document.querySelector("#menuBtn");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

// Dark Mode
const darkModeButton = document.querySelector("#darkMode");

if (darkModeButton) {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle theme
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// Footer Year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Last Modified
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}