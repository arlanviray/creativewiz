<header>
	<div class="maxwidth">
		<div class="logo"><a href="/" data-category="nav bar" data-label="logo"><img src="/images/logo2.png" /></a></div>
		<?php if($thisObj->getSection() === 'results'): ?>
			<!-- display for results page only -->
		<?php endif; ?>
		<div class="shares">
			<?php
				if($thisObj->getSection() === 'results'){
					$subsection = ' - '. $thisObj->setValue4Tracking($resultsData['videos'][$results[0] - 1]['blogger']);
				} else if($thisObj->getSubsection()){
					$subsection = ' - '. $thisObj->setValue4Tracking($thisObj->getSubsection());
				} else {
					$subsection = '';
				}
			?>
			<!--a href="https://www.facebook.com/sharer.php?u=<?= $metaUrl; ?>" target="_blank" class="sprite facebook"></a-->
			<a href="https://www.facebook.com/dialog/feed?app_id=145634995501895&display=page&name=<?= urlencode($metaTitle); ?>&caption=<?= urlencode($metaCapt); ?>&description=<?= urlencode($metaDesc); ?>&picture=<?= $metaImage; ?>&link=<?= $metaUrl; ?>&redirect_uri=https://www.facebook.com/" target="_blank" class="sprite facebook" data-category="share" data-action="facebook" data-label="<?= $thisObj->getSection(); ?><?= $subsection; ?>"></a>
			<a href="https://twitter.com/share?url=<?= $metaUrl; ?>&text=<?= urlencode($metaTitle); ?>&hashtags=simple" target="_blank" class="sprite twitter" data-category="share" data-action="twitter" data-label="<?= $thisObj->getSection(); ?><?= $subsection; ?>"></a>
			<a href="https://plus.google.com/share?url=<?= $metaUrl; ?>" target="_blank" class="sprite googleplus" data-category="share" data-action="googleplus" data-label="<?= $thisObj->getSection(); ?><?= $subsection; ?>"></a>
		</div>
		<div class="navigation"><?php include('navigation.php'); ?></div>
		<div id="mobile_icon" class="cursor"><img src="/images/mobile/icon-menu.png" /></div>
	</div>
</header>

