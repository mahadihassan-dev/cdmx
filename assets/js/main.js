(function ($) {
  "use strict";

  $(document).ready(function () {
    // events slider
    $(".events--slider").owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
    // deals slider
    $(".deals--slider").owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
    // deals slider
    $(".fullwidth--slider").owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      stagePadding: 80,
      navText: [
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
        `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    // magnifiq popup
    document.addEventListener("click", function (event) {
      var trigger = document.getElementById("morePhotosBox");
      if (trigger) {
        if (event.target.closest("#morePhotosBox")) {
          event.preventDefault();
          $(".gallery")
            .magnificPopup({
              delegate: "a",
              type: "image",
              tLoading: "Loading image #%curr%...",
              mainClass: "mfp-img-mobile",
              gallery: {
                enabled: true,
              },
            })
            .magnificPopup("open");
        }
      }
    });
  });
})(jQuery);
