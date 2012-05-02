(function($){
  $.fn.sticky_div = function(options) {
    var defaults = {
      top: 0,
      min_width: 0
    };
    var options = $.extend(defaults, options);
    
    $("<style type='text/css'> .sticky-div{ position:fixed; top:" + options.top + "px;} </style>").appendTo("head");
    
    return this.each(function() {
      obj = $(this);
      obj.before("<div></div>");
      $(window).scroll(function() {
        if($(window).width() >= options.min_width) {
          var window_top = $(window).scrollTop();
          var div_top = obj.prev().offset().top;
          if (window_top > (div_top - options.top)) {
            obj.addClass('sticky-div');
          } else {
            obj.removeClass('sticky-div');
          }
        }
      });
    });
  };
})(jQuery);