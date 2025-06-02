import PureCounter from "@srexi/purecounterjs";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import Swiper from "swiper";

// const windowEl = window;
// const documentEl = document;
// const htmlEl = document.documentElement;
// const bodyEl = document.body;

// -------------------------------------------
// Initiate glightbox
// -------------------------------------------
const glightbox = GLightbox({
  selector: ".glightbox",
});

// -------------------------------------------
// Init isotope layout and filters
// -------------------------------------------
document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
  let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
  let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
  let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

  let initIsotope;
  imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
    initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
      itemSelector: ".isotope-item",
      layoutMode: layout,
      filter: filter,
      sortBy: sort,
    });
  });

  isotopeItem
    .querySelectorAll(".isotope-filters li")
    .forEach(function (filters) {
      filters.addEventListener(
        "click",
        function () {
          isotopeItem
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          if (typeof aosInit === "function") {
            aosInit();
          }
        },
        false
      );
    });
});

// -------------------------------------------
// Preloader
// -------------------------------------------
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

// -------------------------------------------
// Apply .scrolled class to the body as the page is scrolled down
// -------------------------------------------
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");
  if (
    !selectHeader.classList.contains("scroll-up-sticky") &&
    !selectHeader.classList.contains("sticky-top") &&
    !selectHeader.classList.contains("fixed-top")
  )
    return;
  window.scrollY > 100
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
}

document.addEventListener("scroll", toggleScrolled);
window.addEventListener("load", toggleScrolled);

// -------------------------------------------
// Scroll top button
// -------------------------------------------
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);

// -------------------------------------------
// nav bar open close
// -------------------------------------------
document
  .querySelector("#navbarSideCollapse")
  .addEventListener("click", function () {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
    document.querySelector(".navbar-toggler").classList.toggle("_active");
    document.body.classList.toggle("overflow-hidden"); // Включить прокрутку
    // document.querySelector('body').classList.toggle('mobile-nav-active');
  });

// -------------------------------------------
// Initiate Pure Counter
// -------------------------------------------
new PureCounter();

// -------------------------------------------
// Init swiper sliders
// -------------------------------------------
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);
