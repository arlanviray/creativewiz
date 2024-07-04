<div class="row row1">
	<div class="container cproducts">
		<h2>Oxygen Moisture</h2>
		<p class="headercopy">for fine, flat hair</p>
		<div class="products">
			<div class="col col1">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row1_prod1.png', 'resp') ?>
					<div class="copy">
						<p>Shampoo 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(0, 0); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row1_prod2.png', 'resp') ?>
					<div class="copy">
						<p>Conditioner 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(0, 1); ?>
					</div>
				</div>
			</div>
			<div class="col col2">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row1_prod3.png', 'resp') ?>
					<div class="copy">
						<p>Souffle Treatment 200ml</p>
						<p class="price">£6.99*</p>
						<?= productLinks(0, 2); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row1_prod4.png', 'resp') ?>
					<div class="copy">
						<p>Root lift spray 125ml</p>
						<p class="price">£6.99*</p>
						<?= productLinks(0, 3); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row row2">
	<div class="container cproducts">
		<h2>Youthful Vitality</h2>
		<p class="headercopy">for ageing hair</p>
		<div class="products">
			<div class="col col1">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row2_prod1.png', 'resp') ?>
					<div class="copy">
						<p>Shampoo 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(1, 0); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row2_prod2.png', 'resp') ?>
					<div class="copy">
						<p>Conditioner 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(1, 1); ?>
					</div>
				</div>
			</div>
			<div class="col col2">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row2_prod3.png', 'resp') ?>
					<div class="copy">
						<p>Thickening essence 125ml</p>
						<p class="price">£6.99*</p>
						<?= productLinks(1, 2); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row2_prod4.png', 'resp') ?>
					<div class="copy">
						<p>BB CREAM 125ml</p>
						<p class="price">£6.99*</p>
						<?= productLinks(1, 3); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row row3">
	<div class="container cproducts">
		<h2>Pure Care</h2>
		<p class="headercopy">for dull, dry hair</p>
		<div class="products">
			<div class="col col1">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row3_prod1.png', 'resp') ?>
					<div class="copy">
						<p>Shampoo 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(2, 0); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row3_prod2.png', 'resp') ?>
					<div class="copy">
						<p>Conditioner 250ml</p>
						<p class="price">£5.99*</p>
						<?= productLinks(2, 1); ?>
					</div>
				</div>
			</div>
			<div class="col col2">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row3_prod3.png', 'resp') ?>
					<div class="copy">
						<p>Treatment Mask 200ml</p>
						<p class="price">£6.99*</p>
						<?= productLinks(2, 2); ?>
					</div>
				</div>
			</div>
			<div class="col col3">
				<div class="prod prod1">
					<?= $thisObj->getImage('/images/buy_row3_prod4.png', 'resp') ?>
					<div class="copy">
						<p>Dry Oil<br />(all hair types)<br />100ml</p>
						<p class="price">£9.99*</p>
						<?= productLinks(2, 3); ?>
					</div>
				</div>
				<div class="prod prod2">
					<?= $thisObj->getImage('/images/buy_row3_prod5.png', 'resp') ?>
					<div class="copy">
						<p>Dry Oil<br />(Mature Hair)<br />100ml</p>
						<p class="price">£9.99*</p>
						<?= productLinks(2, 4); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row winproducts"><?= winProducts(); ?></div>
