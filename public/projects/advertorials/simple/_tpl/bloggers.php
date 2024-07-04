<section class="contents">
	<div class="maxwidth">
		<?php 
			// print_r($bloggers);
		?>
		<div class="blogger">
			<div class="image"><img src="/images/blogger<?= ($bId + 1) ?>.jpg" /></div>
			<div class="copies">
				<div class="text">
					<h2><?= $bloggers[$bId]['title']; ?></h2>
					<p><?= $bloggers[$bId]['description']; ?></p>
				</div>
			</div>
		</div>
		<div id="video" class="videomain video video1">
			<div class="video-screenshot" data-video="<?= $bloggers[$bId]['video']; ?>">
				<img src="<?= $bloggers[$bId]['image']; ?>" class="resp" />
				<div class="video-play"></div>
			</div>
			<div class="video-block"></div>
		</div>

		<?php require_once('parts/shared/promobox-win.php'); ?>
	</div>
</section>
<?php require_once('parts/script/brightcove-handler.php'); ?>
