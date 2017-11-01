<?php
$settings = array(
	'classes'     => array('home'),
	'title'       => 'Titel',
	'description' => 'Beschreibung',
);
include_once(dirname(__FILE__) . '/inc/header.inc.php');
?>

<h1>h1. Überschrift</h1>
<h2>h2. Überschrift</h2>
<h3>h3. Überschrift</h3>
<h4>h4. Überschrift</h4>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>
	<button type="button">Button</button>
	<button type="button" disabled>Disabled Button</button>
</p>

<pre>
function getStuff() {
	return "stuff";
}
</pre>

<blockquote cite="https://de.wikiquote.org/wiki/Albert_Einstein#Weitere">
	<p>Was nichts kostet, ist nichts wert.</p>
</blockquote>

<?php
include_once(dirname(__FILE__) . '/inc/footer.inc.php');
