var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,  disableOnInteraction: false,},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});