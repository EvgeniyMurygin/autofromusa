$(function(){

  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 841,
        settings:{
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings:{
          slidesToShow: 1
        }          
      },
    ]
  });

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

});


const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
});