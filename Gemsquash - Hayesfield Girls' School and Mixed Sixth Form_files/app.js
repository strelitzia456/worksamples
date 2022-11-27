(function($) {
  'use strict';

  var bp_mobile_max = 767 / 16;
  var bp_desktop_min = 768 / 16;

  // Based on these breakpoints, construct the corresponding media queries
  var mq_mobile = 'screen and (max-width:' + bp_mobile_max + 'em)';
  var mq_desktop = 'screen and (min-width:' + bp_desktop_min + 'em)';


 $('.masthead').offcanvas_menu();
 $('.js-scroll-link').scroll_to();

  /* ======================================================
  Dom updated events via pubsub
  ======================================================*/

  /**
   * Responsive images
   */
  $.subscribe('responsive', function(e, context) {
    // Process any responsive images in the updated pieces of DOM

    $('span.responsive', context).responsiveImage({
      'mode': (window.matchMedia(mq_desktop).matches ? 'desktop' : 'mobile')
    });
  });


  /* ======================================================
  Breakpoint specific code
  ======================================================*/
  enquire
    .register(mq_mobile, { // Mobile
      match: function() {

        $.publish('responsive');
      },
      unmatch: function() {

      }
    })
    .register(mq_desktop, { // Desktop
      match: function() {

        $.publish('responsive');

      },
      unmatch: function() {

      }
    });

})(jQuery);
