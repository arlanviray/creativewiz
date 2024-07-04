<div class="row row1">
	<div class="container">
		<div class="col col1">
			<h2>Youthful<br />vitality</h2>
			<p>You have: dry, lacklustre hair<br />You want: replenished, youthful looking hair</p>
			<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[1]) ?>">Discover more</a></div>
			<?= $thisObj->getImage('/images/experience_row1_prod2.png', 'resp') ?>
		</div>
		<div class="col col2">
			<?= $thisObj->getImage('/images/experience_row1_prod1.png', 'resp') ?>
			<h2>Oxygen<br />Moisture</h2>
			<p>You have: fine, flat hair<br />You want: body and volume</p>
			<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[0]) ?>">Discover more</a></div>
		</div>
		<div class="col col3">
			<?= $thisObj->getImage('/images/experience_row1_prod3.png', 'resp') ?>
			<h2>Pure<br />Care</h2>
			<p>You have: dull, dry hair<br />You want: silkiness and shine</p>
			<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[2]) ?>">Discover more</a></div>
		</div>
	</div>
</div>
<div class="row bgwhite winproducts"><?= winProducts(); ?></div>
<div class="row bbcream"><?= bbCream(); ?></div>
