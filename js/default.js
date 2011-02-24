/**
 * Unobtrusive Scripting Package
 *
 * @package Sitename
 * @link http://example.com/
 * @version 1.0
 * @license WTFPL 2.0, http://sam.zoy.org/wtfpl/
 * @copyright Copyleft (c) 2011, Marc Görtz
 * @author Marc Görtz
 */
var Sitename = {

	/**
	 * Library Configuration
	 *
	 * Configure JavaScript libraries used for DOM manipulation. The
	 * libraries are provided by the Google AJAX Libraries API.
	 *
	 * @return void
	 */
	version: '1.0',
	addons: {
		base: {
			name: 'jquery',
			version: '1'
		}
	},

	/**
	 * External Link Handling
	 *
	 * Open external links in a new window. Add a short description to
	 * the link's title attribute.
	 *
	 * @see  http://gist.github.com/373681
	 * @param props  Configuration object (see configs in function)
	 * @return void
	 */
	addExternalLinks: function(props) {
		// default configuration
		var config = {
			'scope': 'body', // scope for external link detection
			'target': 'external', // either false or string, makes use of the "target" attribute to support Firefox tab handling and Safari status bar info
			'class': '', // apply CSS classes to an external link
			'relation': 'external', // apply a relationship to an external link
			'title': 'Opens in new window' // link title to inform the user about an external link
		};
		// if any properties were supplied, apply them to the config object
		for (var key in props) {
			if (config.hasOwnProperty(key)) {
				config[key] = props[key];
			}
		}
		// get all links and apply the desired handling
		$('a[href*="//"]', config['scope']).each(function() {
			// add attributes and classes
			$(this).attr({
				'rel': ($(this).attr('rel')) ? $(this).attr('rel') + ' ' + config['relation'] : config['relation'],
				'title': ($(this).attr('title')) ? $(this).attr('title') + ' (' + config['title'] + ')' : config['title']
			}).addClass(config['class']);
			if (config['target']) {
				$(this).attr('target', config['target']);
			} else {
				$(this).live({
					'click': function() {
						// open a new window and set focus
						var external = window.open($(this).attr('href'), 'external');
						external.focus();
						// stop the link's default action
						return false;
					}
				});
			}
		});
	},

	/**
	 * Internal Initialization
	 *
	 * Function calls for enhancements, event bindings et al. This
	 * should be the only function ever called from Outer Space.
	 *
	 * @return void
	 */
	init: function() {
		Sitename.addExternalLinks({
			'title': 'Öffnet in neuem Fenster'
		});
	}

};

/**
 * Initialization
 *
 * Load JavaScript library from Google's CDN and initialize scripting
 * when the DOM is ready.
 *
 * @return void
 */
google.load(Sitename.addons.base.name, Sitename.addons.base.version);
google.setOnLoadCallback(Sitename.init);