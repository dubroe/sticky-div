(function($){
  $.fn.sticky_div = function(options) {
    var defaults = {
      top: 0,
      min_width: 0,
      bottom: 0
    };
    var options = $.extend(defaults, options);
    
    $("<style type='text/css'> .sticky-div{ position:fixed; top:" + options.top + "px;} </style>").appendTo("head");
    
    var selector = this;
    
    selector.each(function() {
      $(this).before("<div></div>");
    });
    
    $(window).scroll(function() {
      if($(window).width() >= options.min_width) {
        var window_top = $(window).scrollTop();
        var window_height = $(window).height();
        selector.each(function() {
          var div_top = $(this).prev().offset().top;
          var div_height = $(this).height();
          if ((window_top > (div_top - options.top)) && (div_height < (window_height - options.bottom))) {
            $(this).addClass('sticky-div');
          } else {
            $(this).removeClass('sticky-div');
          }
        });
      }
    });
  };
})(jQuery);