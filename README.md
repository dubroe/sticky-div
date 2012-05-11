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
      min_width: 0, // This represents the minimum screen width that the stickiness will be applied to. Default is 0.
      bottom: 0 // This represents the buffer you want between the bottom of the page and the div in px. Default is 0.
    };
    $('#my_div').sticky_div(options); // Or just $('#my_div').sticky_div();

