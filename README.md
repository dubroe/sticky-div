sticky-div
==========

A jQuery plugin that forces a `div` to stick to the top of the viewport if the user scrolls past it.

Inspired by the blog post _["Stick div at top after scrolling"](http://blog.yjl.im/2010/01/stick-div-at-top-after-scrolling.html)_ by **YJL**.

Sample usage:
----------------

**HTML:**

    <div id="my_div">
      ...
    </div>

**JavaScript:**

    $('#my_div').sticky_div();

    // Or:

    var options = {
      top: 0,
      min_screen_width: 0,
      min_screen_height: 0,
      bottom: 0,
      outer_div: null,
      style_css: null
    };
    $('#my_div').sticky_div(options);

Options:
---------

 - `top` (default: `0px`)<br/>
This represents the buffer you want between the top of the page and the `div` in pixels.

- `min_screen_width` (default: `0px`)<br/>
This represents the minimum screen width that the stickiness will be applied at.

- `min_screen_height` (default: `0px`)<br/>
This represents the minimum screen height that the stickiness will be applied at.

- `bottom` (default: `0px`)<br/>
This represents the buffer you want between the bottom of the page and the `div` in pixels.

- `outer_div` (default: `null`)<br/>
This is a jQuery or DOM element whose height needs to be greater than the `div` in order to make it sticky.

- `style_css` (default: `null`)<br/>
This is an optional setting that allows you to specify a CSS class to extend the styles applied to the sticky `div`.

