export const toggleMenu = () => {
  let toggleIcon = document.getElementById("main-menu-toggle"),
      mainMenu = document.getElementById('main-menu');

  console.log(mainMenu);

  toggleIcon.addEventListener("click", () => {
    toggleIcon.classList.toggle("rotate");
    mainMenu.classList.toggle("show");
  });
};
