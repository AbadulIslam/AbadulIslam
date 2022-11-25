$(function() {
  $(".read-more > a").on('mouseenter', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
  $(".read-more > a").on('mouseout', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
});