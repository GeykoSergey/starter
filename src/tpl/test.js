// document.addEventListener("DOMContentLoaded", () => {
//   function isTouchDevice() {
//     return "ontouchstart" in window || navigator.maxTouchPoints > 0;
//   }

//   if (isTouchDevice()) {
//     document.body.classList.add("touch-device");
//   } else {
//     document.body.classList.add("desktop-device");
//   }

//   function isTouchDevice() {
//     return (
//       "ontouchstart" in window ||
//       (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
//       (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0) // для IE
//     );
//   }

//   if (isTouchDevice()) {
//     console.log("Это сенсорное устройство");
//   } else {
//     document
//       .querySelectorAll('.dropdown-toggle[data-bs-toggle="dropdown"]')
//       .forEach((el) => {
//         el.removeAttribute("data-bs-toggle");
//       });
//   }
// });

// let isTouch = false;

// window.addEventListener('touchstart', () => {
//   isTouch = true;
// }, { once: true });

// window.addEventListener('mousemove', () => {
//   if (!isTouch) {
//     console.log('Устройство с мышью');
//   }
// }, { once: true });
