const darkMode = document.querySelector(".dark-mode");

if (darkMode) {  
    if (localStorage.getItem("mode") === "Dark Mode") {
        document.body.classList.add("dark");
        darkMode.textContent = "Light Mode";
    }

    darkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDarkMode = document.body.classList.contains("dark");
        darkMode.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    });
}
