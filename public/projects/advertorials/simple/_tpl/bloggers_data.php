<?php

	$bloggers = [];
	$newdata = array(
		array(
			'video' => 4172037964001, // Cherry Menlove
			'image' => '/images/blogger1_video.jpg',
			'landingdesc' => "Cherry's inimitable style spans everything from interiors to gardens, decorating to baking and cooking to crafting.",
			'description' => "Cherry's inimitable style spans everything from interiors to gardens, decorating to baking, cooking to crafting – all of which she blogs about on a daily basis. As a parent to 4-year-old twins, she even once penned a book that knocked Jamie Oliver out of top spot.",
		),
		array(
			'video' => 4172012033001, // Tar Mar
			'image' => '/images/blogger2_video.jpg',
			'landingdesc' => "As a fashion student and personal style blogger, Tara has a particular penchant for style and a specific eye for all things beauty.",
			'description' => "As a fashion student and personal style blogger, Tara has a particular penchant for style. The 22-year-old has a specific eye for all things beauty, often vlogging her beauty buys and routines on her popular website and YouTube channel.",
		),
		array(
			'video' => 4172013752001, // Yes Chef
			'image' => '/images/blogger3_video.jpg',
			'landingdesc' => "Tess Ward is a freelance writer and Le Cordon Bleu trained cook who has worked in Michelin-starred kitchens and at River Cottage.",
			'description' => "Tess Ward is a freelance writer and Le Cordon Bleu trained cook. Having spent time working in Michelin-starred kitchens and at River Cottage, she has developed her love of food through writing, travelling and eating her way across the restaurants of London. Last year she completed her diploma from the institute of integrative nutrition and has finished her first cookbook 'The Naked Diet', which will be published in June 2015.",
		),
		array(
			'video' => 4172037963001, // Zoe Newlove
			'image' => '/images/blogger4_video.jpg',
			'landingdesc' => "Head of make-up artistry by day and blogger by night, Zoe is a 25-year-old with genuine beauty cache.",
			'description' => "Head of make-up artistry by day and blogger by night, Zoe is a 25-year-old with genuine beauty cache. With a background in graphic design and social media, she also has an impressive eye for detail and love of all things health and wellness.",
		),
	);
	
	// merge navigation data and bloggers data
	foreach ($navigation['bloggers'] as $key => $value) {
		$bloggers[] = array(
			'title' => $value,
			'video' => $newdata[$key]['video'],
			'image' => $newdata[$key]['image'],
			'landingdesc' => $newdata[$key]['landingdesc'],
			'description' => $newdata[$key]['description'],
			'button' => '<a href="/bloggers/'. $thisObj->setUrlString($value) .'" class="button" data-category="content interaction" data-label="'. $thisObj->setValue4Tracking($value) .'">Find out more</a>'
		);
	}

	// set bloggers id
	foreach ($bloggers as $key => $bval) {
		if($thisObj->getSubsection() === $thisObj->setUrlString($bval['title'])){
			$bId = $key;
		}
	}

?>