const hamburger_menu = document.querySelector(".clickMe-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


// Close the container if the user clicks anywhere outside of it (e.g., on the document)
document.addEventListener("click", (event) => {
  if (container.classList.contains("active") && event.target !== hamburger_menu) {
    container.classList.remove("active");
  }
});
