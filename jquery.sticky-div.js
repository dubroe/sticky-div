(function ($){
  $.fn.sticky_div = function (options) {
    var defaults = {
      top: 0,
      min_screen_width: 0,
      min_screen_height: 0,
      bottom: 0,
      stick_bottom: false,
      outer_div: null,
      style_css: null
    };
    var options = $.extend(defaults, options);

    // !important to override any current positioning or top/bottom.
    $("<style type='text/css'>"
      + " .sticky-div-top    { position: fixed !important; top: "    + options.top    + "px !important; }"
      + " .sticky-div-bottom { position: fixed !important; bottom: " + options.bottom + "px !important; }"
      + " </style>")
      .appendTo("head");

    var selector = this;
    
    // add a class to the anchor, and check for it, so that the anchor <div/> is only added the once.
    selector.each(function () {
      if (!$(this).prev().hasClass("sticky-anchor")) {
        $(this).before("<div class='sticky-anchor'></div>");
      }
    });

    var call_sticky_div = function() {
      $.sticky_div(selector, options);
    };
    // call main method when DOM is ready
    $(document).ready(call_sticky_div);
    // called again on scroll
    $(window).scroll(call_sticky_div);
    // called again on resize
    $(window).resize(call_sticky_div);
  };

  // main method, which does the magic
  $.sticky_div = function (selector, options) {
    var window_top = $(window).scrollTop();
    var window_width = $(window).width();
    var window_height = $(window).height();
    
    selector.each(function () {
      $(this).width($(this).width());
      var anchor = $(this).prev();
      var div_top = anchor.offset().top;
      var div_height = $(this).outerHeight();
      
      var bool_sticky_div = (!options.outer_div || (div_height < $(options.outer_div).height()));
      bool_sticky_div = bool_sticky_div && (window_width >= options.min_screen_width);
      bool_sticky_div = bool_sticky_div && (window_height >= options.min_screen_height);
      if (options.stick_bottom) {
        bool_sticky_div = bool_sticky_div && ((window_top + window_height) < ((div_top + div_height) + options.bottom));
        bool_sticky_div = bool_sticky_div && (div_height < (window_height - options.top));
      } else {
        bool_sticky_div = bool_sticky_div && (window_top > (div_top - options.top));
        bool_sticky_div = bool_sticky_div && (div_height < (window_height - options.bottom));
      }
      
      if (bool_sticky_div) {
        if (options.stick_bottom) {
          $(this).addClass('sticky-div-bottom');
        } else {
          $(this).addClass('sticky-div-top');
        }
        if (options.style_css != null) {
          $(this).addClass(options.style_css);
        }
        anchor.height(div_height);
      } else {
        if (options.stick_bottom) {
          $(this).removeClass('sticky-div-bottom');
        } else {
          $(this).removeClass('sticky-div-top');
        }
        if (options.style_css != null) {
          $(this).removeClass(options.style_css);
        }
        anchor.height(0);
      }
    });
  };
})(jQuery);
