(function ($) {
  'use strict';
  $('.se-trigger img').click(function (e) {
    var id = $(this).parent().attr('id').split('-');
    id = '#se-links-' + id[2];
    $(id).toggleClass('se-active');
    $(id).toggleClass('se-inactive');
    e.stopPropagation();
  });
  $(':not(.se-trigger img, .se-trigger)').click(function () {
    $('.se-links.se-active').addClass('se-inactive');
    $('.se-links.se-active').removeClass('se-active');
  });
})(jQuery);
