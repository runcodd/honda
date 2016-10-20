$(function() {


  $(".burger").on("click",function () {
    $(".nav-main").slideToggle();
  });

$(function() {
        // Call on every window resize
        $(window).resize(function(){
            if ($(window).width() < 1025 ) {
              $(".nav-main ul li").on("click",function (e) {
                if(!$(e.target).closest("div").is(".nav-main__sub")) {
                  $(".nav-main__sub",this).toggle();
                  $(this).siblings(".nav-main ul li").find(".nav-main__sub").hide();
                }
              });
            } else {
                // return false;   // <<< whatever the other margin value should be goes here
            }
        }).resize();   // Cause an initial widow.resize to occur
    });



});
