// Add smooth scrolling
$(document).ready(function() {
    "use strict";
  
    $(".nav-link, #scroll-to-about, #scrool-to-top").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

// Init animation
$(document).ready(function() {
  'use strict';
  new WOW().init();
});