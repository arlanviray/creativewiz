<div class="rows">
	<div class="row row1">
		<div class="container">
			<div class="col col1">
				<?= $thisObj->getImage('/images/home_pic1.jpg', 'resp') ?>
				<a href="<?= $thisObj->setUrlParam('fashion-edits') ?>"><h2>Very Fashion<br />Edits</h2></a>
			</div>
			<div class="col col2">
				<?= $thisObj->getImage('/images/home_pic2.jpg', 'resp') ?>
				<a href="<?= $thisObj->setUrlParam('events') ?>"><h2>Events</h2></a>
			</div>
		</div>
	</div>
	<div class="row row2">
		<div class="container">
			<div class="col col1">
				<?= $thisObj->getImage('/images/home_pic3.jpg', 'resp') ?>
				<div id="twitter-feed"></div>
			</div>
			<div class="col col2">
				<?= $thisObj->getImage('/images/home_pic4.jpg', 'resp') ?>
				<a href="<?= $thisObj->setUrlParam('beauty-edits') ?>"><h2>Very Beauty<br />Edits</h2></a>
			</div>
		</div>
	</div>
	<div class="row row3">
		<div class="container">
			<div class="col col1">
				<?= $thisObj->getImage('/images/home_pic5.jpg', 'resp') ?>
				<a href="<?= $thisObj->setUrlParam('win') ?>"><h2><span>Win £250</span><br />to spend at<br />very.co.uk</h2></a>
			</div>
			<div class="col col2">
				<?= $thisObj->getImage('/images/home_pic6.jpg', 'resp') ?>
				<a href="<?= $thisObj->setUrlParam('quiz') ?>"><h2>Style Icon<br />QUIZ</h2></a>
			</div>
		</div>
	</div>
</div>