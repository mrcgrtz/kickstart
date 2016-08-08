/**
 * Sample Module
 * @class  Kickstart.Sample
 * @author Marc Görtz <https://marcgoertz.de/>
 */

define([
	"jquery"
], function($) {

	"use strict";

	/**
	 * Initializes sample.
	 */
	function init() {
		/* eslint no-console: "off" */
		console.log($.fn.jquery);
	}

	// public API
	return {
		init: init
	};

});
