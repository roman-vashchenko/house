const refs = {
  menuContainer: document.querySelector(".menu-container "),
  btnMenu: document.querySelector(".navigation__menu"),
  list: document.querySelector(".menu-container__list"),
};

refs.btnMenu.addEventListener("click", onMenuClick);

function onMenuClick() {
  refs.menuContainer.classList.toggle("js-open");
  if (refs.menuContainer.classList.contains("js-open")) {
    document.addEventListener("click", onCloseMenu);
  }
  if (!refs.menuContainer.classList.contains("js-open")) {
    document.removeEventListener("click", onCloseMenu);
  }
}

function onCloseMenu(e) {
  if (e.target === refs.list) {
    return;
  }

  if (refs.btnMenu !== e.target) {
    refs.menuContainer.classList.remove("js-open");
    document.removeEventListener("click", onCloseMenu);
  }
}
