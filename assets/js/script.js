$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["App Website", "App Android/Ios", "Konsultasi IT", "Designer UI/UX", "Data Analyst", "AI/ML Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["App Website", "App Android/Ios", "Konsultasi IT", "Designer UI/UX", "Data Analyst", "AI/ML Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// let currentIndex = 0;

// const testimonials = document.querySelectorAll(".testimonial");
// const totalTestimonials = testimonials.length;
// const carousel = document.querySelector(".carousel");

// document.querySelector(".prev-btn").addEventListener("click", () => {
//   currentIndex = currentIndex === 0 ? totalTestimonials - 1 : currentIndex - 1;
//   updateCarousel();
// });

// document.querySelector(".next-btn").addEventListener("click", () => {
//   currentIndex = currentIndex === totalTestimonials - 1 ? 0 : currentIndex + 1;
//   updateCarousel();
// });

// function updateCarousel() {
//   const offset = -currentIndex * 100;
//   carousel.style.transform = `translateX(${offset}%)`;
// }
