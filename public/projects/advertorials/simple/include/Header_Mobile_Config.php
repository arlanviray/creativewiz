<?php if($thisObj->isMobile()): ?>
	<meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
	<meta name="mobile-web-app-capable" content="yes">

	<?php // CONFIGURATION width=device-width, initial-scale=1, minimal-ui ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<?php // Allow web app to be run in full-screen mode. ?>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<?php // Make the app title different than the page title. ?>
	<meta name="apple-mobile-web-app-title" content="<?= $thisObj->_title; ?>">
	<?php // Configure the status bar. ?>
	<meta name="apple-mobile-web-app-status-bar-style" content="black">

	<?php // ICONS ?>
	<?php // iPad retina icon ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-152.png'); ?>" 
		  sizes="152x152" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPad retina icon (iOS < 7) ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-152.png'); ?>" 
		  sizes="144x144" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPad non-retina icon ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-76.png'); ?>" 
		  sizes="76x76" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPad non-retina icon (iOS < 7) ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-76.png'); ?>" 
		  sizes="72x72" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPhone 6 Plus icon ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-120.png'); ?>" 
		  sizes="120x120" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPhone retina icon (iOS < 7) ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-120.png'); ?>" 
		  sizes="114x114" 
		  rel="apple-touch-icon-precomposed">
	<?php // iPhone non-retina icon (iOS < 7) ?>
	<link href="<?= $thisObj->setUrlPath('/images/mobile/apple-touch-icon-precomposed-76.png'); ?>" 
		  sizes="57x57" 
		  rel="apple-touch-icon-precomposed">
<?php endif; ?>
