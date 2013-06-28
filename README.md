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
      top: 0, // This represents the buffer you want between the top of the page and the element in px. Default is 0.
      minScreenWidth: 0, // This represents the minimum screen width that the stickiness will be applied to. Default is 0.
      bottom: 0, // This represents the buffer you want between the bottom of the page and the element in px. Default is 0.
      className: null, // Custom class you can define in your css, that will be toggled when your element become sticky. Default is null, thus no additional class will be added. 
      outerEl: null // This is a jquery or DOM element whose height needs to be greater than the element in order to make it sticky. Default is null.
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
