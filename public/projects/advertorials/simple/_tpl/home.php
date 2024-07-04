<?php

	$quiz = array(
		array(
			"question" => "Your skincare routine is best described by which statement...",
			"image"    => "/images/quiz_thumb1.png",
			"answers"  => array(
				"It's a good day if I remember to take off my makeup before bed.",
				"I've got at least four or five different products on rotation.",
				"Serums and eye creams have recently taken centre stage.",
				"Suncream is my number one skincare tool.",
			),
		),

		array(
			"question" => "During an average weekday, you...",
			"image"    => "/images/quiz_thumb2.png",
			"answers"  => array(
				"Are out and about all day - you juggle more balls than a magician.",
				"Are working a standard 8-hour day, then relaxing with pals.",
				"Can be found either working, working or – oh yeah, that's right – working.",
				"Often spend the day either at home or enjoying the great outdoors.",
			),
		),

		array(
			"question" => "During a normal day, your movements would see you...",
			"image"    => "/images/quiz_thumb3.png",
			"answers"  => array(
				"At home, at work, on the tube, at the shops… and probably back again.",
				"Commuting to work and then out with friends at the end of the day.",
				"In cabs all day in between meetings and appointments. ",
				"At home for the most part.",
			),
		),

		array(
			"question" => "How much time would you say you spend outside?",
			"image"    => "/images/quiz_thumb4.png",
			"answers"  => array(
				"Does the terrace at my favourite wine bar count?",
				"The three hours a week I do in the park with my PT.",
				"I don't have that much time for the great outdoors unless it's on holiday.",
				"I'm often outdoors walking, gardening or taking the dog for a stroll.",
			),
		),

		array(
			"question" => "When it comes to drinking, you...",
			"image"    => "/images/quiz_thumb5.png",
			"answers"  => array(
				"Knock back a couple of bevvies with friends a few times a week.",
				"Have a glass of wine with dinner most nights.",
				"Occasionally have a G&T to celebrate the end of the week.",
				"Would call it a rare occurrence these days.",
			),
		),

		array(
			"question" => "When you look in the mirror, you'd describe your eyes as...",
			"image"    => "/images/quiz_thumb6.png",
			"answers"  => array(
				"Sporting the latest cat's eye liner.",
				"Satisfyingly smooth, thanks to a staunch beauty routine.",
				"A little dry and red.",
				"Framed by smile lines.",
			),
		),

		array(
			"question" => "Your diet and exercise routine is best described as...",
			"image"    => "/images/quiz_thumb7.png",
			"answers"  => array(
				"Something that comes second to my social life.",
				"I hit the gym three times a week and watch what I eat.",
				"Incidental exercise and eating on the run.",
				"I eat well and the great outdoors is my second home.",
			),
		),

		array(
			"question" => "When it comes to breakouts, you...",
			"image"    => "/images/quiz_thumb8.png",
			"answers"  => array(
				"Would call it a constant battle.",
				"Get the occasional spot.",
				"Think yours are probably stress related.",
				"Get them very rarely, if at all.",
			),
		),

		array(
			"question" => "During a normal day, how much water do you drink?",
			"image"    => "/images/quiz_thumb9.png",
			"answers"  => array(
				"A glass when I'm out... if I remember!",
				"I only drink when I'm thirsty.",
				"Two to four glasses a day.",
				"Around two litres every single day.",
			),
		),		
	);

?>
<section class="contents">
	<div class="maxwidth">
		<div class="quiz">
			<div class="progress top"><div class="percentage"></div></div>
			<div class="quiz-container">
				<div id="carousel" class="ccarousel0" data-index="0">
					<ul class="ccontent">
						<li class="cchild">
							<div class="quiz-intro">
								<div class="columns">
									<div class="col col1"><img src="/images/quiz_intro_r.jpg" class="imgright resp" /></div>
									<div class="col col2">
										<img src="/images/quiz_intro_l.jpg" class="imgleft resp" />
										<div class="info">
											<h2>Get to know your skin better</h2>
											<p>Your skin is as unique as your fingerprint but it is under pressure every day; be it stress or air conditioning, changing weather or pollution. For simple solutions on how to achieve naturally healthy looking skin, take our short quiz and you'll receive a personalised skin map and a video from one of the UK's biggest beauty bloggers.</p>
											<p><a href="#" class="button">Take the quiz</a></p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<?php
							foreach ($quiz as $key => $val) {
								echo '<li class="cchild">';
									echo '<div class="quiz-data">';
										echo '<h2 class="question">'. ($key + 1) .'. '. $val['question'] .'</h2>';
										echo '<div class="columns">';
											echo '<div class="col col1">';
												echo '<div class="image"><img src="'. $val['image'] .'" /></a></div>';
											echo '</div>';
											echo '<div class="col col2">';
											foreach ($val['answers'] as $akey => $ans) {
												echo '<div class="ans ans'. ($akey + 1) .'" data-id="'. $key .'">';
													echo '<p>'. $ans .'</p>';
													echo '<div class="btn cursor"></div>';
												echo '</div>';
											}
											echo '</div>';
										echo '</div>';
									echo '</div>';
								echo '</li>';
							}
						?>
						<li class="cchild">
							<div class="quiz-end">
								<div class="countdown">
									<img src="/images/quiz_end_circle.png" class="circle" />
									<span></span>
								</div>
								<h2>Please wait</h2>
								<p>We're generating your results</p>
							</div>
						</li>
					</ul>
					<div class="arrows">
						<div class="back left cursor">< Back</div>
						<div class="next right cursor">Next ></div>
					</div>
				</div>
			</div>
			<div class="progress bottom"><div class="percentage"></div></div>
		</div>

		<div class="bloggers">
			<div class="title">
				<h1>Beauty roll call</h1>
				<p>Meet the bloggers who have all the tips, tricks and advice on how to care for your skin, no matter what it needs to be at its best.<br />Simple as that.</p>
			</div>
			<div class="columns">
				<?php require_once('bloggers_data.php'); ?>

				<div class="col col1">
					<div class="girl girl1">
						<div class="g-content">
							<div class="thumb">
								<div class="arrow-style up"></div>
								<img src="/images/blogger1.jpg" class="resp" />
							</div>
							<h2><?= $bloggers[0]['title']; ?></h2>
							<p><?= $bloggers[0]['landingdesc']; ?></p>
							<p class="cta"><?= $bloggers[0]['button']; ?></p>
						</div>
					</div>
					<div class="girl girl2">
						<div class="g-content">
							<h2><?= $bloggers[1]['title']; ?></h2>
							<p><?= $bloggers[1]['landingdesc']; ?></p>
							<p class="cta"><?= $bloggers[1]['button']; ?></p>
							<div class="thumb">
								<div class="arrow-style down"></div>
								<img src="/images/blogger2.jpg" class="resp" />
							</div>
						</div>
					</div>
				</div>
				<div class="col col2">
					<div class="girl girl1">
						<div class="g-content">
							<div class="thumb">
								<div class="arrow-style up"></div>
								<img src="/images/blogger3.jpg" class="resp" />
							</div>
							<h2><?= $bloggers[2]['title']; ?></h2>
							<p><?= $bloggers[2]['landingdesc']; ?></p>
							<p class="cta"><?= $bloggers[2]['button']; ?></p>
						</div>
					</div>
					<div class="girl girl2">
						<div class="g-content">
							<h2><?= $bloggers[3]['title']; ?></h2>
							<p><?= $bloggers[3]['landingdesc']; ?></p>
							<p class="cta"><?= $bloggers[3]['button']; ?></p>
							<div class="thumb">
								<div class="arrow-style down"></div>
								<img src="/images/blogger4.jpg" class="resp" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php require_once('parts/shared/promobox-win.php'); ?>
	</div>
</section>