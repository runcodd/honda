$(function() {


  $(".burger").on("click",function () {
    $(".nav-main").slideToggle();
  });
  $("#owl-cars").owlCarousel({
     slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
      pagination: false
   });
   $(".popup").magnificPopup({

  });
  $('.popup-gmaps').magnificPopup({
    disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
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
