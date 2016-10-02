/**
 * Sample Module
 * @class  Kickstart.Sample
 * @author Marc Görtz <https://marcgoertz.de/>
 */

define([
	"pep",
	"jquery"
], function(pep, $) {

	"use strict";

	/**
	 * Initializes sample.
	 */
	function init() {
		/* eslint no-console: "off" */
		console.log($.fn.jquery);
		$(document).on("pointerdown", function(evt) {
			console.log(evt.target);
		});
	}

	// public API
	return {
		init: init
	};

});
