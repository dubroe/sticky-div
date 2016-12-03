(function ($){
  $.fn.sticky_div = function (options) {
    var defaults = {
      top: 0,
      min_screen_width: 0,
      bottom: 0,
      outer_div: null,
      style_css: null
    };
    var options = $.extend(defaults, options);

    // !important to override any current positioning or top.
    $("<style type='text/css'> .sticky-div{ position:fixed !important; top:" + options.top + "px !important;} </style>").appendTo("head");

    var selector = this;
    
    // add a class to the anchor, and check for it, so that the anchor <div/> is only added the once.
    selector.each(function () {
      if (!$(this).prev().hasClass(".sticky-anchor")) {
        $(this).before("<div class='sticky-anchor'></div>");
      }
    });

    // call to main method, so that it is not only a window scroll which triggers it
    $.sticky_div(selector, options);
    $(window).scroll(function () {
      // called again on scroll.
      $.sticky_div(selector, options);
    });
  };

  // main method, which does the magic
  $.sticky_div = function (selector, options) {
    var window_top = $(window).scrollTop();
    var window_height = $(window).height();
    
    selector.each(function () {
      $(this).width($(this).width());
      var div_top = $(this).prev().offset().top;
      var div_height = $(this).outerHeight();
      
      var bool_sticky_div = (!options.outer_div || (div_height < $(options.outer_div).height()));
      bool_sticky_div = bool_sticky_div && (window_top > (div_top - options.top));
      bool_sticky_div = bool_sticky_div && (div_height < (window_height - options.bottom));
      bool_sticky_div = bool_sticky_div && ($(window).width() >= options.min_screen_width);
      
      if (bool_sticky_div) {
        $(this).addClass('sticky-div');
        if (options.style_css != null) {
          $(this).addClass(options.style_css);
        }
      } else {
        $(this).removeClass('sticky-div');
        if (options.style_css != null) {
          $(this).removeClass(options.style_css);
        }
      }
    });
  };
})(jQuery);
