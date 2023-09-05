$(function(){

  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="fish-arrow" src="images/fish-prew.svg" alt="fish"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="fish-arrow" src="images/fish.svg" alt="fish"></button>',
  });

  $('.tab-title li').not('.active').click(function() {
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
  })

  $(function() {
    $('.tab-title li:first').addClass('active');
    $('.tab-content li:first').css('display', 'block');
  });

  let selector = document.querySelectorAll('input[type="tel"]');

  $(document).ready(function () {
    $(selector).inputmask({"mask": "+7 (999) 999-99-99"});
  });

});

