/**
 * Sample Module
 * @class  Kickstart.Sample
 * @author Marc Görtz <https://marcgoertz.de/>
 */

define([
	"pep",
	"jquery"
], function(pep, $) {

	/**
	 * Initializes sample.
	 */
	function init() {
		/* eslint no-console: "off" */
		console.log($.fn.jquery);
		$(document).on("pointerdown", function(event) {
			console.log(event.target);
		});
	}

	// public API
	return {
		init: init
	};

});
