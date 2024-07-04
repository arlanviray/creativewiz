<?php
	
	switch($thisObj->getSection()){
		case 'results':
			require_once('_tpl/results_data.php');
			$metaTitle = $resultsTitle;
			$metaCapt  = $resultsCapt;
			$metaDesc  = $resultsDesc;
			$metaImage = $resultsImage;
			break;

		case 'bloggers':
			require_once('_tpl/bloggers_data.php');
			$metaTitle = $bloggers[$bId]['title'];
			$metaCapt  = $bloggers[$bId]['landingdesc'];
			$metaDesc  = $bloggers[$bId]['description'];
			$metaImage = $thisObj->setUrlPath($bloggers[$bId]['image']);
			break;

		case 'win':
			$metaTitle = 'Simple - Win!';
			$metaDesc  = 'Simple quiz – we know your skin will love you for it';
			break;

		default:
			$metaTitle = 'Simple - Take the quiz';
			$metaDesc  = 'Your own personal skin regime';
			$metaImage = $thisObj->setUrlPath('/images/logo.png');
	}

	$metaUrl = $thisObj->getDomainName().$_SERVER['REQUEST_URI'];

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!--[if IE]><![endif]-->
<!--[if lt IE 7 ]> <html lang="en" class="ie6">   <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7">   <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8">   <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="ie9">   <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
<head>
	<title><?= $thisObj->_title; ?> | <?= ucfirst($thisObj->getSection()); ?></title>
	<meta name="author" content="Arlan Viray, arlan.viray@creativewiz.net" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Simple" />
	<meta property="og:url" content="<?= $metaUrl; ?>" />
	<meta property="og:title" content="<?= $metaTitle; ?>" />
	<meta property="og:description" content="<?= $metaDesc; ?>" />
	<meta property="og:image" content="<?= $metaImage; ?>" />
	<!-- Twitter Card data -->
	<meta name="twitter:title" content="<?= $metaTitle; ?>" />
	<meta name="twitter:description" content="<?= $metaDesc; ?>" />
	<meta name="twitter:image:src" content="<?= $metaImage; ?>" />
	<!-- Schema.org markup for Google+ -->
	<meta itemprop="name" content="<?= $metaTitle; ?>" />
	<meta itemprop="description" content="<?= $metaDesc; ?>" />
	<meta itemprop="image" content="<?= $metaImage; ?>" />
    <!-- no cache headers -->
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<!-- end no cache headers -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
	<meta http-equiv="cleartype" content="on">
	<link rel="shortcut icon" href="<?= $thisObj->setUrlPath('/favicon.ico'); ?>" type="image/x-icon" />
	<?php require_once('include/Header_Mobile_Config.php'); ?>
	<link type="text/css" href="<?= $thisObj->setUrlPath('/css/styles.css'); ?>" rel="stylesheet" />
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
	<![endif]-->
	<script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/libs.bundle.js'); ?>"></script>
	<script type="text/javascript" src="https://admin.brightcove.com/js/BrightcoveExperiences.js"></script>
	<script type="text/javascript">
		var _domainName = '<?= $thisObj->getDomainName(); ?>';
	</script>
</head>
<body class="page-template-<?= $thisObj->getSection(); ?>">
	<div id="mobile_navigation"><?php include('parts/shared/navigation.php'); ?></div>
	<div id="contentwrapper">
		<?php require_once('parts/shared/header.php'); ?>
		