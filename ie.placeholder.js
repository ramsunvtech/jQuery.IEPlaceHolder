/**
 * This jQuery Plugin is helps to implement PlaceHolder Functionality in IE7, IE8, IE9 Browser.
 * Author: Venkatraman Ramamoorthy
 * Email: ramsunvtech@gmail.com
 */

(function($) {
    $.fn.iePlaceHolder = function(settings) {
      // Check If the Placeholder Attribute is invalid in the Browser.
      if(typeof document.createElement("input").placeholder == 'undefined') {
        // This Object 'phConfig' is used for storing all the configurations.
        var phConfig = {
          Class: 'place-holder',
          element: 'span'
        };

        if (settings) $.extend(phConfig, settings);
        var phC = phConfig, ph = 'placeholder', phS = '[' + ph + ']', phClassS = '.' + phC.Class;

        $(phS).each(function(){
          var el = $(this);
          var lbl = $(document.createElement(phC.element)).addClass(phC.Class).css({
            'position':'absolute',
            'cursor': 'text',
            'color': '#999',
            'width': el.css('width'),
            'height': el.css('height'),
            'fontStyle': el.css('fontStyle'),
            'fontSize': el.css('fontSize'),
            'lineHeight': el.css('lineHeight'),
            'fontFamily': el.css('fontFamily'),
            'paddingLeft': (parseInt(el.css('paddingLeft')) + parseInt(el.css("border-left-width"))) + 'px',
            'paddingTop': el.css('paddingTop')
          }).offset(el.offset());

          $(lbl.html(el.attr(ph))).insertBefore(el);
        });

        $(phClassS).on('focus', function() {
          $(this).next().focus();
        });

        $(phS).on("keyup", function(){
          var vis = (this.value) ? 'hidden' : 'visible';
          $(this).prev(phClassS).css('visibility', vis);
        }).blur(function() {
          if($(this).val() == '') $(this).prev(phClassS).css('visibility', 'visible');
        });
      }
    }
}(jQuery));
