const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
