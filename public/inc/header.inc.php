<?php $config = parse_ini_file(dirname(__FILE__) . '/../../config/config.ini', TRUE); ?>
<!DOCTYPE html>
<html lang="de" class="no-js <?php print implode(' ', $settings['classes']) ?>" id="<?php print str_replace('.', '-', $_SERVER['SERVER_NAME']); ?>">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php print $settings['title']; ?> | <?php print $config['global']['sitename']; ?></title>
<meta name="description" content="<?php print $settings['description']; ?>">
<?php if (in_array('admin', $settings['classes'])): ?><meta name="robots" content="noindex"><?php endif; ?>
<link rel="stylesheet" href="/css/look.css">
<?php if (isset($settings['alternate']) and is_array($settings['alternate'])): ?>
	<?php foreach ($settings['alternate'] as $format => $url): ?>
		<link rel="alternate" href="<?= $url ?>" type="<?= $format ?>">
	<?php endforeach; ?>
<?php endif; ?>
<?php if (isset($config['geo']) and is_array($config['geo'])): ?>
	<meta name="geo.position" content="<?php print $config['geo']['latitude']; ?>;<?php print $config['geo']['longitude']; ?>">
	<meta name="icbm" content="<?php print $config['geo']['latitude']; ?>,<?php print $config['geo']['longitude']; ?>">
<?php endif; ?>
<meta property="og:site_name" content="<?php print $config['global']['sitename']; ?>">
<meta property="og:title" content="<?php print (isset($settings['ogp']['title'])) ? $settings['ogp']['title'] : $settings['title']; ?>">
<meta property="og:type" content="<?php print (isset($settings['ogp']['type'])) ? $settings['ogp']['type'] : $config['facebook']['type']; ?>">
<meta property="og:url" content="<?php print (isset($settings['ogp']['url'])) ? $settings['ogp']['url'] : 'https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>">
<meta property="og:image" content="<?php print (isset($settings['ogp']['image'])) ? $settings['ogp']['image'] : 'https://' . $_SERVER['SERVER_NAME'] .'/img/facebook.png'; ?>">
<meta property="fb:admins" content="<?php print $config['facebook']['id']; ?>">
<?php if (isset($config['twitter']) and isset($config['twitter']['id'])): ?>
	<meta property="twitter:site:id" content="@<?php print $config['twitter']['id']; ?>">
<?php endif; ?>

<header>
	<div class="logo">
		<a href="/" rel="start"><img src="/img/kickstart.svg" width="300" height="83" alt="<?php print $config['global']['sitename']; ?>"></a>
	</div>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="#">Nav #1</a></li>
			<li><a href="#">Nav #2</a></li>
			<li><a href="#">Nav #3</a></li>
		</ul>
	</nav>
</header>

<main>
