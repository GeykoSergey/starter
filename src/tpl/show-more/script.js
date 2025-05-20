// $(document).ready(function() {
// 	$('.block__title').click(function(event) {
// 		if($('.block').hasClass('one')){
// 			$('.block__title').not($(this)).removeClass('active');
// 			$('.block__text').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".block__title");

  titles.forEach(function (title) {
    title.addEventListener("click", function () {
      const block = title.closest(".block");
      const isOneMode = block && block.classList.contains("one");
      const text = title.nextElementSibling;

      if (isOneMode) {
        titles.forEach(function (otherTitle) {
          if (otherTitle !== title) {
            otherTitle.classList.remove("active");
            const otherText = otherTitle.nextElementSibling;
            if (otherText && otherText.style.display !== "none") {
              slideUp(otherText, 300);
            }
          }
        });
      }

      title.classList.toggle("active");
      slideToggle(text, 300);
    });
  });

  // Slide toggle helpers
  function slideUp(el, duration) {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight; // force reflow
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    window.setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
    }, duration);
  }

  function slideDown(el, duration) {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") display = "block";
    el.style.display = display;

    const height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight; // force reflow

    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");

    window.setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
    }, duration);
  }

  function slideToggle(el, duration) {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  }
});
