/**
 * coc.breadcrumb.js v1.8
 * Pattern Library breadcrumb functions
 * @dependency: jQuery v2.2.4
 *
 * Provides the responsive functionality for breadcrumbs.
 * See Pattern Library > Components > Breadcrumbs for required HTML markup and
 * usage information.
 */

(function ( $, window, document ) {
	'use strict';
	var COC = window.COC || {};
	COC.Breadcrumb = {
		selector: {
			wrapper:    '.breadcrumb-container',
			breadcrumb: '.cui.breadcrumb',
			overlay:    '.bg-overlay'
		},
		event: {
			resizeTimeout: null
		},
		windowWidth: null,
		getBreadcrumbs: function() {
			return $( COC.Breadcrumb.selector.wrapper ).find( COC.Breadcrumb.selector.breadcrumb );
		},
		init: function() {
			// Initialize all breadcrumbs.
			COC.Breadcrumb.getBreadcrumbs().each( function() {
				COC.Breadcrumb.initSingle( $( this ) );
			});

			// Save the current window width.
			COC.Breadcrumb.windowWidth = window.innerWidth;

			// Set up the resize event.
			COC.Breadcrumb.setupResizeEvent();
		},
		initSingle: function( breadcrumb ) {
			COC.Breadcrumb.setupScrollEvent( breadcrumb );
			COC.Breadcrumb.scrollRight( breadcrumb );
		},
		scrollRight: function( breadcrumb ) {
			// Scroll the breadcrumb all the way to the right.
			breadcrumb.scrollLeft( breadcrumb.width() );

			// Trigger the scroll event.
			breadcrumb.scroll();
		},
		setupScrollEvent: function( breadcrumb ) {
			var overlay = breadcrumb.siblings( COC.Breadcrumb.selector.overlay );

			// Hide the overlay (located on the left) when the breadcrumb is
			// scrolled all the way to the left.
			breadcrumb.scroll( function () {
				if (this.scrollLeft === 0) {
					overlay.hide();
				}
				else {
					overlay.show();
				}
			});
		},
		setupResizeEvent: function() {
			// Triggers all breadcrumbs to scroll right on resize when the
			// resized window width is NOT the same as the saved window width.
			$( window ).resize( function() {
				clearTimeout( COC.Breadcrumb.event.resizeTimeout );
				COC.Breadcrumb.event.resizeTimeout = setTimeout( function() {
					if( COC.Breadcrumb.windowWidth !== window.innerWidth ) {
						COC.Breadcrumb.windowWidth = window.innerWidth;
						COC.Breadcrumb.getBreadcrumbs().each( function() {
							COC.Breadcrumb.scrollRight( $( this ) );
						});
					}
				}, 50 );
			});
		}
	};// End of COC.Breadcrumb{}

	window.COC = COC;

	$( document ).ready( function() {
		COC.Breadcrumb.init();
	});

}( jQuery, window, document ));
