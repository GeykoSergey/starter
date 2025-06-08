// -------------------------------------------
// nav bar open close
// -------------------------------------------

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");

  if (!burger || !menu) return;

  const toggleMenu = () => {
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("_active");
    document.body.classList.toggle("overflow-hidden", isOpen);

    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  burger.addEventListener("click", toggleMenu);

  menuItems?.forEach((item) => {
    item.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });
})();
