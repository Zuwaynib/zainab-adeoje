const darkMode = document.querySelector(".dark-mode");

// Toggle between light and dark modes
if (darkMode) {  
    if (localStorage.getItem("mode") === "Dark Mode") {
        document.body.classList.add("dark");
        darkMode.textContent = "Dark Mode";
    }

    darkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDarkMode = document.body.classList.contains("dark");
        darkMode.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
        localStorage.setItem("mode", isDarkMode ? "Light Mode" : "Dark Mode");
    });
}
