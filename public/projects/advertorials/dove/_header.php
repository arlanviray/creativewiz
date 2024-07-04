<!doctype html>
<!--[if IE]><![endif]-->
<!--[if lt IE 7 ]> <html lang="en" class="ie6">   <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7">   <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8">   <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="ie9">   <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><?= $thisObj->_title; ?> | <?= ucfirst($thisObj->getSection()); ?></title>
	<link rel="icon" type="image/png" href="<?= $thisObj->setUrlPath('/favicon.png'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="cleartype" content="on">
    <?php if($thisObj->isMobile()): ?>
		<meta name="HandheldFriendly" content="True">
	    <meta name="MobileOptimized" content="320">
	    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
	    <meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="<?= $thisObj->_title; ?>">
		<link rel="shortcut icon" sizes="16x16" href="<?= $thisObj->setUrlPath('/images/mobile/icon-16x16.png'); ?>">
		<link rel="shortcut icon" sizes="196x196" href="<?= $thisObj->setUrlPath('/images/mobile/icon-196x196.png'); ?>">
		<link rel="apple-touch-icon-precomposed" href="<?= $thisObj->setUrlPath('/images/mobile/icon-152x152.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?= $thisObj->setUrlPath('/images/mobile/icon-152x152.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?= $thisObj->setUrlPath('/images/mobile/icon-144x144.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?= $thisObj->setUrlPath('/images/mobile/icon-120x120.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?= $thisObj->setUrlPath('/images/mobile/icon-114x114.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?= $thisObj->setUrlPath('/images/mobile/icon-76x76.png'); ?>">
		<!link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?= $thisObj->setUrlPath('/images/mobile/icon-72x72.png'); ?>">
	<?php endif; ?>
	<link type="text/css" href="<?= $thisObj->setUrlPath('/css/styles.css'); ?>" rel="stylesheet" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/TweenMax.min.js'); ?>"></script>
	<script type="text/javascript" src="https://admin.brightcove.com/js/BrightcoveExperiences.js"></script>
	<script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/modernizr.custom.js'); ?>"></script>
	<script type="text/javascript">
		var _isRewrite = <?= $thisObj->_rewrite; ?>;
		var _isMobile = <?= $thisObj->isMobile() ? 'true' : 'false' ?>;
		var _isTablet = <?= $thisObj->isTablet() ? 'true' : 'false' ?>;
		var _domainName = '<?= $thisObj->getDomainName(); ?>';
		var _thisSection = '<?= $thisObj->getSection(); ?>';
		var _thisSubsection = '<?= $thisObj->getSubsection(); ?>';
		var _thisResults = <?= json_encode($hcresults); ?>;
	</script>
	<?php if($thisObj->getSection() == 'result'): ?>
		<script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/jquery.scrollmagic.min.js'); ?>"></script>
		<!script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/jquery.scrollmagic.debug.js'); ?>"></script>
	<?php endif; ?>
</head>
<body>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5RK9CG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5RK9CG');</script>
<!-- End Google Tag Manager -->
<div id="wrapper">
	<div id="header">
		<div class="container">
			<div class="logo">
				<a href="/" class="evt-logoheader"><img data-src-base='<?= $thisObj->getDomainName(); ?>/images/' data-src='<320:top_logo_mobile_portrait.png,>320:top_logo.png' alt='Dove - Advance Hair Series' /></a>
			</div>
			<div class="navigation"><?= $thisObj->getNavigation(); ?></div>
			<div class="social">
				<a href="<?= $thisObj->_social['facebook'] ?>" class="evt-facebook" target="_blank"><?= $thisObj->getImage('/images/social_top_facebook.png') ?></a>
				<a href="<?= $thisObj->_social['twitter'] ?>" class="evt-twitter" target="_blank"><?= $thisObj->getImage('/images/social_top_twitter.png') ?></a>
				<a href="<?= $thisObj->_social['youtube'] ?>" class="evt-youtube" target="_blank"><?= $thisObj->getImage('/images/social_top_youtube.png') ?></a>
			</div>
			<div id="mobile-icon" class="cursor"></div>
		</div>
	</div>
	<div id="mobile-nav"><?= $thisObj->getNavigation(true); ?></div>
	<div id="contents" class="sections <?= $thisObj->getSection(); ?>">