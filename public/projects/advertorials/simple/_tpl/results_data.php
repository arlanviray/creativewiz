<?php
			
	$results = base64_decode($thisObj->getSubsection());
	$results = explode(',', $results);

	$vidThumbs = [];
	$resultsData = array(
		'videos' => array(
			array(
				'blogger' => 'Tar Mar',
				'video' => 4172012033001,
				'title' => 'Simple - Kind To Skin Cleansing Facial Wipes TV Advert',
				'shareimage' => '/images/quiz_result_video2_square.jpg',
				'screengrab' => '/images/quiz_result_video2.jpg',
				'description' => "How heavy partying can show in your skin – which means any makeup you put over it isn't going to look as good as it could otherwise. Assume we're talking to a Cosmo crowd who like to try new cosmetics so appeal to that, but explain what products to use on a daily basis (Micellular Water) to make sure your own skin is the best and most hydrated foundation it can be."
			),
			array(
				'blogger' => 'Cherry Menlove',
				'video' => 4172037964001,
				'title' => 'Simple - Kind To Skin+ Illuminating Radiance Cream TV Ad',
				'shareimage' => '/images/quiz_result_video1_square.jpg',
				'screengrab' => '/images/quiz_result_video1.jpg',
				'description' => "The different types of hydration your skin needs – both inside and out. The difference drinking lots of water makes and the difference the right products make."
			),
			array(
				'blogger' => 'Zoe Newlove',
				'video' => 4172037963001,
				'title' => 'Simple - Skincare is Kind to City Skin',
				'shareimage' => '/images/quiz_result_video4_square.jpg',
				'screengrab' => '/images/quiz_result_video4.jpg',
				'description' => "How busy/career women tend to neglect their skin because they don't have time for a complicated beauty routine. How adding this one step to their daily regime will actually hydrate and cleanse the skin meaning you'll need to use less products overall."
			),
			array(
				'blogger' => 'Yes Chef',
				'video' => 4172013752001,
				'title' => 'Simple - Your Skincare Routine',
				'shareimage' => '/images/quiz_result_video3_square.jpg',
				'screengrab' => '/images/quiz_result_video3.jpg',
				'description' => "How a healthy lifestyle can occasionally have the odd negative side effect… like; being outdoorsy = good! The sun damage than can happen to your skin as an effect: bad. And then how to compensate. Wear sunscreen, keep hydrated and use the right products at the end of the day."
			),
		),

		'infos' => array(
			array(
				array(
					'title' => 'EYES',
					'description' => "You're on top of the latest beauty and cosmetic trends, but all those products can leave your skin sensitive and in need of hydration. As can excessive drinking and smoking. Always remember to take your make-up off before bed and invest in some calming products to make sure your face is always on the top of its game."
				),
				array(
					'title' => 'EYES',
					'description' => "You know your creams from your serums and don't mind forking out for the good stuff. But as you get older, you need a level of moisture your skin can rely on day in and day out – from the inside and the outside. Make sure the products you're using aren't only hydrating but are built for your sensitive skin without being heavy and greasy."
				),
				array(
					'title' => 'EYES',
					'description' => "You work hard and are always on the go, which means your skin can suffer as a result. All the different environments and pollutants you're exposed to may leave your skin more sensitive than it should be as a result – and your eyes are one of the first places to show signs of dehydration caused by environmental factors."
				),
				array(
					'title' => 'EYES',
					'description' => "Over the years, all the sun and wind your skin has been exposed to has had an effect on your skin. And whilst your face certainly gets older along with the rest of you, sometimes the issues we attribute to age are actually just signs of dehydration caused by the environment. Seek out products that provide seriously penetrative hydration."
				),
			),

			array(
				array(
					'title' => 'FOREHEAD',
					'description' => "There's a reason “you are what you eat” is such a popular idiom… and that's because it's true. What you put inside your body will eventually show on the outside. Being the body's largest organ, your skin is the biggest billboard for your health you have. If your skin is tight, oily or prone to breakouts, your diet may be having an impact. Consult a dietician for a personalised solution."
				),
				array(
					'title' => 'FOREHEAD',
					'description' => "Jenna Zoe says 'Drinking more water can seem like a real challenge, but in my opinion it really is the top practice you can put into place. Try just adding one extra glass into your morning routine, perhaps a warm water with lemon and a little honey if you need sweetness when you wake up. Alternatively, set an alarm to go off on your phone at 11am and through regular intervals throughout the day as a reminder to drink an extra glass then."
				),
				array(
					'title' => 'FOREHEAD',
					'description' => "Philippa Lowe says: Environments with artificial air reduce the overall humidity in the air. This causes water to evaporate from the skin, resulting in an overall reduced moisture content and drying out of the skin. This drying effect can lead to damage of the skin barrier and dry, red, itchy, scaling sensitive skin. If the skin barrier is already damaged, such as with sensitive skin, the artificial air can make the problem worse."
				),
				array(
					'title' => 'FOREHEAD',
					'description' => "Keeping fit and active is one of the most important things that you can do for your overall health and well being. Exercising outside in the fresh air can have an immediate positive impact on the way you look and feel but try to remember to wear a moisturiser with both UVA and UVB sunscreen to protect skin from sun exposure. Don't forget to gently cleanse and moisturise every morning and night and keep yourself hydrated especially if you are exercising lots."
				),
			),

			array(
				array(
					'title' => 'CHIN',
					'description' => "It looks like your lifestyle might be starting to show in your skin. If you're drinking and smoking a lot, your face may be having trouble keeping up, leaving your skin in serious need of some TLC. Even if it feels oily in parts and you're experiencing regular breakouts, it could actually be crying out for moisture."
				),
				array(
					'title' => 'CHIN',
					'description' => "You're someone who puts a lot of effort into your career and relationships, but you might be letting your skin suffer as a result. You may not think you have a sensitive complexion, but if you're not putting the right things in, you may have the makings of seriously dehydrated skin."
				),
				array(
					'title' => 'CHIN',
					'description' => "You're a hard worker who's always running around, and that can wreak havoc on your skin. From air conditioning to varying humidity levels, you might not notice the effect all those different environments are having on your face, but your skin doesn't lie! It may be dehydrated and in need of some moisture. "
				),
				array(
					'title' => 'CHIN',
					'description' => "You like to get out and about and maintain an active lifestyle. Be careful though, even here in the UK the sun's powerful UV rays can weaken the skin's barrier and leave your complexion dehydrated and in need of penetrative moisture. If your skin is dry and showing signs of ageing, you might need to up your skincare regime."
				),
			),
			
			array(
				array(
					'title' => 'CHEEKS',
					'description' => "<b>Product to try: Simple Kind To Skin Micellar Cleansing Water.</b><br /><br />Not only does it help attract and remove makeup, its it's instantly hydrating which means it helps you achieve that lit-from-within look. With all the less-than-perfect things you put in your body, you want something that's gentle yet effective and you know will leave you feeling refreshed at the end of the day."
				),
				array(
					'title' => 'CHEEKS',
					'description' => "<b>Product to try: Micellar Cleansing Water.</b><br /><br />With Vitamins C and B3, it's known to restore and soften skin, while other active ingredients help dissolve make-up and condition the skin in the gentlest way possible. Best of all, it's hydrating which means your skin will never feel tight or sticky."
				),
				array(
					'title' => 'CHEEKS',
					'description' => "<b>Product to try: Micellar Cleansing Water.</b><br /><br />It can help combat the dehydrating effects of air conditioning and humidity by gently cleansing and instantly hydrating. Not only does it attract pollutants, grime and impurities, it will minimise the potential for further irritation as you go about your day."
				),
				array(
					'title' => 'CHEEKS',
					'description' => "<b>Product to try: Micellar Cleansing Water.</b><br /><br />Your skin can react to harsh chemicals and environmental irritants so using a gentle cleanser such as Micellar Cleansing Water will help reduce the stress it's under. The gentle yet effective formulation keeps it hydrated whilst it actively helps to unclog pores. The result will be a much smoother complexion."
				),
			),
		)
	);

	$resultsTitle = $resultsData['videos'][$results[0] - 1]['title'];
	$resultsCapt  = "I've just received my bespoke skin mapping tool with Simple. Check it out!";
	$resultsDesc  = $resultsData['videos'][$results[0] - 1]['description'];
	// for live - allow thirdparty
	$resultsImage = $thisObj->setUrlPath($resultsData['videos'][$results[0] - 1]['shareimage']);
	// for testing
	// $resultsImage = "http://testftp.hearstdigital.co.uk/simple/videothumb". $results[0] .".jpg";
	
	// first array value is for video
	// rest for info
	// print_r($resultsData);
	
?>