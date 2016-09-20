$photo = $('.photo');

$(window).scroll(function(){
    $photo.css("opacity", 1 - $(window).scrollTop() / 600);
  });


