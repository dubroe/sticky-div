(function($){
  $.fn.sticky_div = function(options) {
    var defaults = {
      top: 0,
      min_screen_width: 0,
      bottom: 0,
      outer_div: null
    };
    var options = $.extend(defaults, options);
    $("<style type='text/css'> .sticky-div{ position:fixed; top:" + options.top + "px;} </style>").appendTo("head");
    
    var selector = this;
    
    selector.each(function() {
      $(this).before("<div></div>");
    });
    
    $(window).scroll(function() {
      if($(window).width() >= options.min_screen_width) {
        var window_top = $(window).scrollTop();
        var window_height = $(window).height();
        selector.each(function() {
          var div_top = $(this).prev().offset().top;
          var div_height = $(this).outerHeight();
          if ((!options.outer_div || (div_height < options.outer_div.height())) && (window_top > (div_top - options.top)) && (div_height < (window_height - options.bottom))) {
            $(this).addClass('sticky-div');
          } else {
            $(this).removeClass('sticky-div');
          }
        });
      }
    });
  };
})(jQuery);