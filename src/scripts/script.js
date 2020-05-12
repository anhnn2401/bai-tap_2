$('.slide_home').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1
});$('.btn-open-menu').on('click', function(){
  $('.list-menu').toggleClass('open')
})