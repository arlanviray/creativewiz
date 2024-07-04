	</div>
	<div id="footer">
		<div class="container">
			<ul>
				<li>
					<div class="logoVery"><a href="/"><?= $thisObj->getImage('/images/logo_very_footer.png', 'very') ?></a></div>
					<div class="association">in association with</div>
					<div class="otherlogo">
						<a href="http://www.cosmopolitan.co.uk/" target="_blank"><?= $thisObj->getImage('/images/logo_cosmopolitan_footer.png', 'cosmo') ?></a>
						<a href="http://www.company.co.uk/" target="_blank"><?= $thisObj->getImage('/images/logo_company_footer.png', 'company') ?></a>
						<a href="http://www.reveal.co.uk/" target="_blank"><?= $thisObj->getImage('/images/logo_reveal_footer.png', 'reveal') ?></a>
					</div>
					<div class="social">
						<a href="<?= $thisObj->_social['facebook'] ?>" target="_blank"><?= $thisObj->getImage('/images/social_facebook.png', 'facebook') ?></a>
						<a href="<?= $thisObj->_social['twitter'] ?>" target="_blank"><?= $thisObj->getImage('/images/social_twitter.png', 'twitter') ?></a>
						<a href="<?= $thisObj->_social['youtube'] ?>" target="_blank"><?= $thisObj->getImage('/images/social_youtube.png', 'youtube') ?></a>
					</div>
				</li>
				<li>Copyright &copy; 2014. Hearst Magazines UK is the trading name of The National Magazine Company Ltd, 72 Broadwick Street, London, W1F 9EP. Registered in England 112955. All rights reserved</li>
			</ul>
		</div>
	</div>
	<div id="backTotop" class="cursor"></div>
</div>
<script type="text/javascript" src="<?= $thisObj->setUrlPath('/js/script.min.js'); ?>"></script>
</body>
</html>