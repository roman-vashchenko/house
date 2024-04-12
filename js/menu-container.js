const refs = {
  menuContainer: document.querySelector(".menu-container "),
  btnMenu: document.querySelector(".navigation__menu"),
  list: document.querySelector(".menu-container__list"),
};

refs.btnMenu.addEventListener("click", onOpenMenu);

function onOpenMenu() {
  refs.menuContainer.classList.toggle("js-open");
  if (refs.menuContainer.classList.contains("js-open")) {
    document.addEventListener("click", onCloseMenu);
  } else {
    document.removeEventListener("click", onCloseMenu);
  }
}

function onCloseMenu(e) {
  if (e.target === refs.list || e.target === refs.btnMenu) {
    return;
  }
  refs.menuContainer.classList.remove("js-open");
  document.removeEventListener("click", onCloseMenu);
}
