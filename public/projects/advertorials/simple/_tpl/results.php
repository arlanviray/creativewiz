<section class="contents">
	<div class="maxwidth">
		<div class="videoheader">
			<div class="image"><img src="/images/videothumb.jpg" /></div>
			<div class="copies">
				<div class="text">
					<h2>YOUR SKIN, SORTED</h2>
					<p>Thanks for taking the time to get to know your skin better. We think you'll be pleasantly surprised by the results! Based on your answers, we've compiled a personalised skin-mapping tool so you can pinpoint your sensitivities and work towards your best skin yet. We've also got a video, just for you, customised to your skin type.</p>
				</div>
			</div>
		</div>

		<div id="video" class="videomain video video1">
			<div class="video-screenshot" data-video="<?= $resultsData['videos'][$results[0] - 1]['video']; ?>">
				<img src="<?= $resultsData['videos'][$results[0] - 1]['screengrab']; ?>" class="resp" />
				<div class="video-play"></div>
			</div>
			<div class="video-block"></div>
		</div>
		<div class="infos">
			<div class="columns">
				<div class="col col1">
					<img src="/images/quiz_result_face_2.jpg" class="resp" />
					<div class="spots">
						<div class="spot spot1 eyes" data-face="eyes"><img src="/images/quiz_result_face_spot.png" /></div>
						<div class="spot spot2 forehead" data-face="forehead"><img src="/images/quiz_result_face_spot.png" /></div>
						<div class="spot spot3 chin" data-face="chin"><img src="/images/quiz_result_face_spot.png" /></div>
						<div class="spot spot4 cheeks" data-face="cheeks"><img src="/images/quiz_result_face_spot.png" /></div>
					</div>
				</div>
				<div class="col col2">
					<div class="title">
						<h2>Your bespoke face facts</h2>
						<p>Everyone's skin is different and we're all prone to different sensitivities. Click on the hot spots to discover how your lifestyle is affecting your skin complete with expert tips and product recommendations.<br />You can also watch more videos below.</p>
					</div>
					<div class="product">
						<img src="/images/quiz_result_face_product_2.png" class="bottle" />
						<!--div class="logo-superdrug">
							<img src="/images/quiz_result_face_logo_superdrug.png" />
							<a href="" target="_blank" class="button" data-category="content interaction" data-label="voucher">Get your voucher here</a>
						</div-->
						<!--div class="btn-circle">
							<a href="#"><h2>CLick<br />here to<br />claim your<br />discount<br />voucher</h2></a>
						</div-->
						<div class="btn-circle">
							<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339531&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="voucher"><h2>Get your voucher here</h2></a>
						</div>
					</div>
				</div>
			</div>
			<div class="spotsinfo">
				<div class="copies">
					<?php
						foreach ($resultsData['infos'] as $key => $info) {
							$key = $key + 1;
							echo '<div class="copy copy'. $key .'">';
								echo '<h2>'. $info[$results[$key] - 1]['title'] .'</h2>';
								echo '<p>'. $info[$results[$key] - 1]['description'] .'</p>';
							echo '</div>';
						}
					?>
					<div class="close"><a href="#" class="button">Close</a></div>
				</div>
			</div>
		</div>
		<div class="videothumbs">
			<?php
				foreach ($resultsData['videos'] as $vkey => $data) {
					if(($results[0] - 1) !== $vkey){
						$vidThumbs[] = $data;
					}
				}

				foreach ($vidThumbs as $tkey => $thumb) {
					$tkey = $tkey + 1;

					echo '<div class="col col'. $tkey .'">';
						echo '<div id="video" class="video video'. ($tkey + 1) .'">';
							echo '<div class="video-screenshot" data-video="'. $thumb['video'] .'">';
								echo '<img src="'. $thumb['screengrab'] .'" class="resp" />';
								echo '<div class="video-play"></div>';
							echo '</div>';
							echo '<div class="video-block"></div>';
						echo '</div>';
					echo '</div>';
				}
			?>
		</div>
		<div class="products">
			<div class="title">
				<h2>We recommend...</h2>
				<p>Now that you have your bespoke skin mapping tool, check out the Simple range - perfect for keeping those skin sensitivities at bay.</p>
			</div>
			<div class="products-contents">
				<div class="col col1">
					<div class="prod prod1">
						<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="clicktobuy - Simple kind to skin micellar cleansing water">
							<img src="/images/product4.png" />
							<p>Simple kind to skin micellar cleansing water</p>
						</a>
					</div>
					<div class="prod prod2">
						<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="clicktobuy - Simple kind to skin cleansing facial wipes">
							<img src="/images/product2.png" />
							<p>Simple kind to skin cleansing facial wipes</p>
						</a>
					</div>
				</div>
				<div class="col col2">
					<div class="prod prod3">
						<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="clicktobuy - Simple kind to skin replenishing rich moisturiser">
							<img src="/images/product5.png" />
							<p>Simple kind to skin replenishing rich moisturiser</p>
						</a>
					</div>
					<div class="prod prod4">
						<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="clicktobuy - Simple kind to skin hydrating light moisturiser">
							<img src="/images/product3.png" />
							<p>Simple kind to skin hydrating light moisturiser</p>
						</a>
					</div>
					<div class="prod prod5">
						<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="clicktobuy - Simple kind to eyes soothing eye balm">
							<img src="/images/product1.png" />
							<p>Simple kind to eyes soothing eye balm</p>
						</a>
					</div>
				</div>
			</div>
			<div class="products-shop"><a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339529&PluID=0&ord=%n" target="_blank" class="button" data-category="content interaction" data-label="clicktobuy">Learn more about the Simple range</a></div>
		</div>

		<?php require_once('parts/shared/promobox-win.php'); ?>
	</div>
</section>
<?php require_once('parts/script/brightcove-handler.php'); ?>
