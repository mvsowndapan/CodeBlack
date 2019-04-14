new WOW().init();

$(window).scroll(()=>{
  if($(window).scrollTop() >= 600){
    $('#navbar').addClass('sticky');
    $('.txt').addClass('custom-text-black');
    $('#navbar').removeClass('back');
    $('.txt').removeClass('custom-text-white');
  }
  else{
    $('#navbar').removeClass('sticky');
    $('.txt').removeClass('custom-text-black');
    $('#navbar').addClass('back');
    $('.txt').addClass('custom-text-white');
  }
})



