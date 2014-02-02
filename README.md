stickyEl
==========

A jquery plugin that forces a element to stick to the top of the window if the user tries to scroll past it.

Inspired by the following blog post: http://blog.yjl.im/2010/01/stick-div-at-top-after-scrolling.html


Sample usage:

In your html:

    <div id="my-div">
      ...
    </div>

In your javascript:

    var options = {
      top: 0, // The buffer you want between the top of the page and the element in px. Default is 0.
      offsetTop: 0, // Top offset position from top that determines when the element becomes sticky. Default is 0.
      writeStyle: true, // Inject style attribute to the element. If you prefer toggling classes, set this to false.
      minScreenWidth: 0, // The minimum screen width that the stickiness will be applied to. Default is 0.
      bottom: 0, // The buffer you want between the bottom of the page and the element in px. Default is 0.
      className: null, // Custom class that will be toggled when your element become sticky. Default is null. 
      outerEl: null // A jquery or DOM element whose height needs to be greater than the element in order to make it sticky. Default is null.
      toggleEl: false // You can also toggle another non sticky elements and a class. The value has to by an array with element and class passed respectively.
    };

    $('#my-div').stickyEl(options);

Or:
    
    $('#my-div').stickyEl({top: 50, className: 'customClass'});

Or just: 
  
    $('#my-div').stickyEl();

Plugin supports multiple sticky elements with different options as well:

    $('#my-div').stickyEl();
    $('#my-other-div').stickyEl(top: 50);
    $('#another-div').stickyEl(top: 150);

The example of toggling another element that is not sticky:

  $('#my-sticky-el').stickyEl({ toggleEl: ['li.my-item', 'is-hidden'] });

The code above would work like:

  $('li.my-item').addClass('is-hidden'); //when #my-sticky-el is sticked
  $('li.my-item').removeClass('is-hidden'); //when #my-sticky-el is not sticked

You can also call two methods on any element that is already sticky.
  
`$('#my-div').stickyEl();`
`$('#my-div').stickyEl('offscroll');` will unbind `StickyEl.prototype.recalc()` private method on window scroll events for #my-div

`$('#my-div').stickyEl();`
`$('#my-div').stickyEl('offscroll_all');` will unbind `StickyEl.prototype.recalc()` private method on window scroll events for all stickyEl elements regardless of the given element.

If you try to call the methods above on element that is not an instance of StickyEl object, `$('#iam-not-sticky-yet').('offscroll');` the method is ignored and new instance with default options will be initialized. 

    
Built with use of [jQuery Boilerplate](https://github.com/jquery-boilerplate/boilerplate/) available under the [MIT License](http://opensource.org/licenses/mit-license.php).
