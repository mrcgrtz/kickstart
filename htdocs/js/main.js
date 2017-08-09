/**
 * Main Module
 * @class  Kickstart.Main
 * @author Marc Görtz <https://marcgoertz.de/>
 */

/* eslint no-unused-vars: "off", max-params: "off" */

require([
	"src/sample"
], function(sample) {

	// initialize each module
	for (var idx = arguments.length - 1; idx >= 0; idx--) {
		arguments[idx].init();
	}

});
