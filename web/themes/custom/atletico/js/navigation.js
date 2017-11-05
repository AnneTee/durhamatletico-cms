(function ($) {
  var menuToggle = $('#js-mobile-menu-button').unbind();
  var $mainNav = $('#js-mobile-menu');
  $mainNav.removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $mainNav.slideToggle(function(){
      if($mainNav.is(':hidden')) {
        $mainNav.removeAttr('style');
      }
    });
  });
})(jQuery);
