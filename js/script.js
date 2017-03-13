

  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
          $('nav').addClass('nav-up').removeClass('nav-down');

          console.log(up);
      } else {
          $('nav').addClass('nav-down').removeClass('nav-up');

      }
      mypos = newscroll;
  });

  $('.options .col-md-4 .template').hover(function(){
    $(this).parent().parent().siblings().addClass('imgBlur');
  }, function() { // Mouse out
    $(this).parent().parent().siblings().removeClass('imgBlur');
  });

  $('.options .col-md-6 .template').hover(function(){
    $(this).parent().parent().siblings().addClass('imgBlur');
  }, function() { // Mouse out
    $(this).parent().parent().siblings().removeClass('imgBlur');
  });
