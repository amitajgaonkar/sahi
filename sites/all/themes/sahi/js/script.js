/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

var locationGlobalData = [];

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
	
	Drupal.behaviors.custom_behavior = {
    attach: function(context, settings) {
      //~ $('.hover').hover(
        //~ function() {
          //~ $( '.tablet-wrapper' ).addClass( 'tablet-hover' );
        //~ },
        //~ function() {
          //~ $( '.tablet-wrapper' ).removeClass( 'tablet-hover' );
        //~ }
      //~ );
      
      
      $(".mapping, .sahi-tablet").on("mousemove",function(e){
        //convert cusrsor into image in this region
        $('.mapping, .sahi-tablet').css({
         'cursor' : 'none'
        });
        
        $('.sahi-tablet').css({
          display: 'block',
        });

        var target = $(".home-image"); 
        var dot = target.find('.sahi-tablet');
        console.log(dot);
        var height = dot.height();
        var width = dot.width();
        
        var mX = e.clientX - width / 2;
        var mY = e.clientY - height / 2;

        $(dot).css('-webkit-transform', 'translate3d(' + mX + 'px , ' + mY + 'px, 0) scale(1, 1)');
        
        var dimension = $(".mapping").offset();
        
          
      });

      $( ".mapping, .sahi-tablet" ).mouseout(function() {
        $('.sahi-tablet').css({
          display: 'none'
        });
      });
    }
  };
})(jQuery, Drupal, this, this.document);
