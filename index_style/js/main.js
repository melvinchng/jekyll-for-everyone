---
layout: null
---

$(document).ready(function () {
  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

    //Disable cut copy paste
  $('body').bind('cut copy paste', function (e) {
    e.preventDefault();
  });
 
  //Disable mouse right click
  $("body").on("contextmenu",function(e){
      return false;
  });

})
