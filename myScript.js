$(function(){
    $('li').click(function() {
      $("li.active").removeClass("active");
      $(this).addClass('active');
    });
    $("body").css("user-select", "none")
});
