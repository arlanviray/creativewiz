<div class="promobox-win">
	<div class="columns">
		<div class="col col1">
			<div class="win-copies">
				<h2>YOUR CHANCE TO WIN</h2>
				<!--p>Meet the bloggers who have all the tips, tricks and advice on how to care for your skin, no matter what it needs to be at its best. Simple as that.</p-->
				<?php if($thisObj->getSection() === 'results'): ?>
					<p>You've done the quiz, watched our blogger videos and got a personalised skin map with tips on how to care for your skin. Now there's more! For the chance to win some Simple products which leave your skin hydrated, simply enter your details here.</p>
				<?php else: ?>
					<p>Get your hands on Simple products which leave your skin hydrated. Enter for your chance to win.</p>
				<?php endif; ?>
				<p class="cta"><a href="/win" class="button" data-category="content interaction" data-label="entercompetition - from <?= $thisObj->getSection(); ?>">Enter now</a></p>
			</div>
		</div>
		<div class="col col2">
			<div class="win-prods"><img src="/images/win_products.png" /></div>
			<div class="quiz-promo">
				<div class="btn-circle">
					<?php
						// if($thisObj->getSection() === 'results'){
						// 	$link = "/win";
						// 	// $text = "Don't<br />forget to<br />enter the<br />competition to win";
						// 	$text = "Simple<br />kind to eyes soothing eye balm";
						// } else {
						// 	$link = "/";
						// 	// $text = 'Take the<br />quiz and get<br />your discount voucher';
						// 	$text = 'Claim<br />your<br />voucher';
						// }
						$text = 'Claim<br />your<br />voucher';
					?>
					<a href="http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=13339531&PluID=0&ord=%n" target="_blank" data-category="content interaction" data-label="claimyourvoucher - from <?= $thisObj->getSection(); ?>"><h2><?= $text; ?></h2></a>
				</div>
			</div>
		</div>
	</div>
</div>