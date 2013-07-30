<?php $config = parse_ini_file(dirname(__FILE__) . '/../../config/config.ini', TRUE); ?>
<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" id="" lang="de"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" id="" lang="de"> <!--<![endif]-->
	<head prefix="og: //ogp.me/ns# fb: //ogp.me/ns/fb#">
		<meta charset="utf-8">

		<!-- page title and description -->
		<title><?php print $settings['title']; ?> | <?php print $config['global']['sitename']; ?></title>
		<meta name="description" content="<?php print $settings['description']; ?>">
		<?php if (in_array('admin', $settings['classes'])): ?><meta name="robots" content="noindex"><?php endif; ?>

		<!-- mobile viewport optimized: h5bp.com/viewport -->
		<meta name="viewport" content="width=device-width">

		<!-- minified stylesheet -->
		<link rel="stylesheet" href="/css/default.min.css">

		<?php if (isset($settings['alternate']) and is_array($settings['alternate'])): ?>
			<!-- alternate versions -->
			<?php foreach ($settings['alternate'] as $format => $url): ?>
				<link rel="alternate" href="<?= $url ?>" type="<?= $format ?>">
			<?php endforeach; ?>
		<?php endif; ?>

		<?php if (isset($settings['microformats']) and is_array($settings['microformats'])): ?>
			<!-- Microformats profiles -->
			<?php foreach ($settings['microformats'] as $format): ?>
				<link rel="profile" href="//microformats.org/profile/<?= strtolower($format) ?>">
			<?php endforeach; ?>
		<?php endif; ?>

		<!-- geo meta tags -->
		<meta name="geo.position" content="<?php print $config['geo']['latitude']; ?>;<?php print $config['geo']['longitude']; ?>">
		<meta name="icbm" content="<?php print $config['geo']['latitude']; ?>,<?php print $config['geo']['longitude']; ?>">

		<!-- Open Graph meta tags: http://ogp.me/ -->
		<link rel="schema.og" href="//opengraphprotocol.org/schema/">
		<meta property="og:site_name" content="<?php print $config['global']['sitename']; ?>">
		<meta property="og:title" content="<?php print (isset($settings['ogp']['title'])) ? $settings['ogp']['title'] : $settings['title']; ?>">
		<meta property="og:type" content="<?php print (isset($settings['ogp']['type'])) ? $settings['ogp']['type'] : $config['facebook']['type']; ?>">
		<meta property="og:url" content="<?php print (isset($settings['ogp']['url'])) ? $settings['ogp']['url'] : 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>">
		<meta property="og:image" content="<?php print (isset($settings['ogp']['image'])) ? $settings['ogp']['image'] : 'http://' . $_SERVER['SERVER_NAME'] .'/assets/img/facebook.png'; ?>">
		<meta property="fb:admins" content="<?php print $config['facebook']['id']; ?>">
		<meta property="twitter:site:id" content="@<?php print $config['twitter']['id']; ?>">

		<!-- all JavaScript at the bottom, except this custom Modernizr build -->
		<script src="/js/modernizr.min.js"></script>

	</head>
	<body class="<?php print implode(' ', $settings['classes']) ?>">

		<!--[if lt IE 8]><div class="message message-update">Ihr Browser ist leider zu alt, um unsere Seite korrekt anzuzeigen. <a href="//windows.microsoft.com/de-DE/internet-explorer/downloads/ie">Laden Sie hier die neueste Version herunter</a> oder <a href="//www.google.com/chromeframe/?redirect=true">installieren Sie Google Chrome Frame</a>.</div><![endif]-->

		<!-- header -->
		<header>

			<!-- logo -->
			<div class="logo"><a href="/" rel="start"><?php print $config['global']['sitename']; ?></a></div>

			<!-- main navigation -->
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="#">Nav #1</a></li>
					<li><a href="#">Nav #2</a></li>
					<li><a href="#">Nav #3</a></li>
				</ul>
			</nav>

		</header>

		<!-- content -->
		<main>
