<!DOCTYPE html>
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" id="" lang="de" itemscope itemtype="http://schema.org/WebPage"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" id="" lang="de" itemscope itemtype="http://schema.org/WebPage"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" id="" lang="de" itemscope itemtype="http://schema.org/WebPage"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">

		<!-- Page title and description -->
		<title><?php print $settings['title']; ?> | Site-Name</title>
		<meta name="description" content="<?php print $settings['description']; ?>">

		<!-- Mobile viewport optimized: h5bp.com/viewport -->
		<meta name="viewport" content="width=device-width">

		<!-- Open Graph meta tags: http://ogp.me/ -->
		<link rel="schema.og" href="//opengraphprotocol.org/schema/">
		<meta property="og:site_name" content="Site-Name">
		<meta property="og:title" content="<?php print (isset($settings['ogp']['title'])) ? $settings['ogp']['title'] : $settings['title']; ?>">
		<meta property="og:type" content="<?php print (isset($settings['ogp']['type'])) ? $settings['ogp']['type'] : 'website'; ?>">
		<meta property="og:url" content="<?php print (isset($settings['ogp']['url'])) ? $settings['ogp']['url'] : 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>">
		<meta property="og:image" content="<?php print (isset($settings['ogp']['image'])) ? $settings['ogp']['image'] : 'http://example.com/assets/img/facebook.png'; ?>">
		<meta property="fb:admins" content="708162426">
		<meta property="twitter:site:id" content="@Dreamseer">

		<!-- Geo meta tags -->
		<meta name="geo.position" content="51.016667;5.916667">
		<meta name="icbm" content="51.016667,5.916667">

		<?php if (isset($settings['alternate']) and is_array($settings['alternate'])): ?>
			<!-- Alternate versions -->
			<?php foreach ($settings['alternate'] as $format => $url): ?>
				<link rel="alternate" href="<?= $url ?>" type="<?= $format ?>">
			<? endforeach; ?>
		<?php endif; ?>

		<?php if (isset($settings['microformats']) and is_array($settings['microformats'])): ?>
			<!-- Microformats profiles -->
			<?php foreach ($settings['microformats'] as $format): ?>
				<link rel="profile" href="//microformats.org/profile/<?= strtolower($format) ?>">
			<? endforeach; ?>
		<?php endif; ?>

		<!-- Minified stylesheet -->
		<link rel="stylesheet" href="/css/default.min.css">

		<!-- All JavaScript at the bottom, except this Modernizr build.
			 Modernizr enables HTML5 elements & feature detects for optimal performance.
			 Create your own custom Modernizr build: www.modernizr.com/download/ -->
		<script src="/js/modernizr.min.js"></script>

	</head>
	<body class="">

		<!--[if lt IE 7]><div class="browser-update">Ihr Browser ist leider zu alt, um unsere Seite korrekt anzuzeigen. <a href="//windows.microsoft.com/de-DE/internet-explorer/downloads/ie">Laden Sie hier die neueste Version herunter</a> oder <a href="//www.google.com/chromeframe/?redirect=true">installieren Sie Google Chrome Frame</a>.</div><![endif]-->

		<!-- Logo -->
		<div role="banner"><a href="/" rel="start">Logo</a></div>

		<!-- Main navigation -->
		<nav role="navigation">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="#">Nav #1</a></li>
				<li><a href="#">Nav #2</a></li>
				<li><a href="#">Nav #3</a></li>
			</ul>
		</nav>

		<!-- Content -->
		<div role="main" itemprop="mainContentOfPage">
