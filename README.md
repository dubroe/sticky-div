sticky-div
==========

A jquery plugin that forces a div to stick to the top of the window if the user tries to scroll past it.

Inspired by the following blog post: http://blog.yjl.im/2010/01/stick-div-at-top-after-scrolling.html

Sample usage:

In your html:

    <div id="my_div">
      ...
    </div>

In your javascript:

    var options = {
      top: 0, // This represents the buffer you want between the top of the page and the div in px. Default is 0.
      min_screen_width: 0, // This represents the minimum screen width that the stickiness will be applied to. Default is 0.
      bottom: 0, // This represents the buffer you want between the bottom of the page and the div in px. Default is 0.
      outer_div: null, // This is a jquery or DOM element whose height needs to be greater than the div in order to make it sticky. Default is null.
      style_css: null // This is an optional setting that allows you to specify a css class to extend the styles applied to the sticky div. Default is null.
    };
    $('#my_div').sticky_div(options); // Or just $('#my_div').sticky_div();

