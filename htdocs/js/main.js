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
	for (var index = arguments.length - 1; index >= 0; index--) {
		arguments[index].init();
	}

});
