;(function ( $, window, document, undefined ) {
  var stickyEl = "stickyEl",
    defaults = {
      top: 0,
      minScreenWidth: 0,
      bottom: 0,
      className: null,
      outerEl: null
    };

  // The actual plugin constructor
  function StickyEl( elem, options ) {
    this.$elem = $(elem);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = stickyEl;

    this.init();
  }


  StickyEl.prototype = {
    init: function() {
      var elem = this.$elem;
      var options = this.options;
      var top = options.top;

      $("<style type='text/css'> .sticky-el{ position:fixed !important;} </style>").appendTo("head");
      style = elem.attr('style');

      //check if element has any style attribute defined
      if (style !== undefined){
        //if so, prevent overwritting original style
        elem.attr('style', style + ' top: ' + top + 'px !important;');
      } else {
        elem.attr('style', 'top: ' + top + 'px !important;');
      }
    
      if (!elem.prev().hasClass(".sticky-anchor")) {
        elem.before("<div class='sticky-anchor'></div>");
      }

      this.onscroll(elem, options);
    },

    //on scroll event listener
    onscroll: function(elem, options){
      if ($(window).width() >= options.minScreenWidth) {
        $(window).on('scroll', {'elem': elem, 'options': options}, this.recalc);
      }
    },

    //main method which does the magic
    recalc: function(ev){
      var elem = ev.data['elem'];
      var options = ev.data['options'];
      var top = options.top;
      var windowTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var elemTop = elem.prev().offset().top;
      var elemHeight = elem.outerHeight();
      var className = options.className;
      
      if ((!options.outerEl || (elemHeight < options.outerEl.height())) && (windowTop > (elemTop - top)) && (elemHeight < (windowHeight - options.bottom))) {
        //add sticky-el class to the element (and custom className if it is defined)
        !className ? elem.addClass('sticky-el') : elem.addClass('sticky-el ' + className);
      } else {
        //remove sticky-el class (and className if it is defined)
        !className ? elem.removeClass('sticky-el') : elem.removeClass('sticky-el ' + className);
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[stickyEl] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + stickyEl)) {
        $.data(this, "plugin_" + stickyEl, new StickyEl( this, options ));
      }
    });
  };

})( jQuery, window, document );