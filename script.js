document.addEventListener("DOMContentLoaded", () => {
  
  const darkButton = document.getElementById("btn-dark");
  const lightButton = document.getElementById("btn-light");
  const body = document.body;

  function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  function enableLightMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }

  darkButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    enableDarkMode();
  });

  lightButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    enableLightMode();
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    enableLightMode(); 
  }

});