;(function ( $, window, document, undefined ) {
  var stickyEl = "stickyEl",
    defaults = {
      top: 0,
      offsetTop: 0,
      writeStyle: true,
      minScreenWidth: 0,
      bottom: 0,
      className: null,
      outerEl: null,
      toggleEl: false
    };

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

      if (options.writeStyle) {
        if (style !== undefined) {
          elem.attr('style', style + ' top: ' + top + 'px !important;');
        } else {
          elem.attr('style', 'top: ' + top + 'px !important;');
        }
      }
    
      if (!elem.prev().hasClass(".sticky-anchor")) {
        elem.before("<div class='sticky-anchor'></div>");
      }

      this.onscroll(elem, options);
    },

    onscroll: function(elem, options) {
      if ($(window).width() >= options.minScreenWidth) {
        $(window).on('scroll', {'elem': elem, 'options': options}, this.recalc);
      }
    },

    offscroll: function(elem) {
      $(window).off('scroll', elem, this.recalc);
    },

    offscroll_all: function() {
      $(window).off('scroll', this.recalc);
    },

    recalc: function(ev) {
      var elem = ev.data.elem;
      var options = ev.data.options;
      var top = options.top;
      var windowTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var elemTop = elem.prev().offset().top;
      var elemHeight = elem.outerHeight();
      var className = options.className;
      var outerEl = options.outerEl;
      var offsetTop = options.offsetTop;
      var toggleEl = options.toggleEl;
      var el, elClass;
      
      if ((!outerEl || (elemHeight < outerEl.height())) && (windowTop + offsetTop > (elemTop - top)) && (elemHeight < (windowHeight - options.bottom))) {
        !className ? elem.addClass('sticky-el') : elem.addClass('sticky-el ' + className);
        if (toggleEl) {
          try{
            el = toggleEl[0];
            elClass = toggleEl[1];
            $(el).addClass(elClass);
          } catch(e) {
            throw new Error();
          }
        }
      } else {
        !className ? elem.removeClass('sticky-el') : elem.removeClass('sticky-el ' + className);
        if (toggleEl) {
          try{
            el = toggleEl[0];
            elClass = toggleEl[1];
            $(el).removeClass(elClass);
          } catch(e) {
            throw new Error();
          }
        }
      }
    }
  };

  $.fn[stickyEl] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + stickyEl)) {
        $.data(this, "plugin_" + stickyEl, new StickyEl( this, options ));
      } else if (StickyEl.prototype[options]) {
        $.data(this, 'plugin_' + stickyEl)[options]();
      }
    });
  };

})( jQuery, window, document );