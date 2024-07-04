<div class="row row1">
	<div class="carousel">
		<ul class="clist">
			<li>
				<div class="info info1">
					<div class="data">
						<div class="copy">
							<h2>Welcome to the NEW Premium Hair Care Range by Dove</h2>
							<p>Beautifully nourished hair is not a trend, it’s an essential. Time to discover a new chapter in superior hair care...</p>
							<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('experience') ?>">See more</a></div>
						</div>
					</div>
					<div class="image">
						<img data-src-base='<?= $thisObj->getDomainName(); ?>/images/' data-src='<819:home_gallery1_small.jpg,>820:home_gallery1.jpg' class="main" />
					</div>
				</div>
			</li>
			<li>
				<div class="info info2">
					<div class="data">
						<div class="copy">
							<h2>Oxygen<br />Moisture</h2>
							<p>Great hair starts with conditioning ingredients, ready to give fine, flat hair more body and volume.</p>
							<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[0]) ?>">See more</a></div>
						</div>
					</div>
					<div class="image">
						<img data-src-base='<?= $thisObj->getDomainName(); ?>/images/' data-src='<819:home_gallery2_small.jpg,>820:home_gallery2.jpg' class="main" />
					</div>
				</div>
			</li>
			<li>
				<div class="info info4">
					<div class="data">
						<div class="copy">
							<h2>Youthful Vitality</h2>
							<p>Say goodbye to lacklustre locks and enjoy replenished, fuller, and more youthful-looking hair.</p>
							<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[1]) ?>">See more</a></div>
						</div>
					</div>
					<div class="image">
						<img data-src-base='<?= $thisObj->getDomainName(); ?>/images/' data-src='<819:home_gallery4_small.jpg,>820:home_gallery4.jpg' class="main" />
					</div>
				</div>
			</li>
			<li>
				<div class="info info3">
					<div class="data">
						<div class="copy">
							<h2>Pure Care</h2>
							<p>Infused with a luxurious hair oil, discover hero products that revive dull, dry locks with shimmer and shine.</p>
							<div class="btn cursor"><a href="<?= $thisObj->setUrlParam('result/'. $hcresults[2]) ?>">See more</a></div>
						</div>
					</div>
					<div class="image">
						<img data-src-base='<?= $thisObj->getDomainName(); ?>/images/' data-src='<819:home_gallery3_small.jpg,>820:home_gallery3.jpg' class="main" />
					</div>
				</div>
			</li>
		</ul>
		<div class="bullets"></div>
	</div>
</div>
<div class="row row2" id="hairconsultation">
	<div class="container">
		<div class="col1">
			<div class="copy">
				<h2>Your Personal<br />Hair Consultation</h2>
				<p>Ready for a new hair revolution? It all starts with choosing the right product to suit your individual hair needs. Our handy consultation tool will show you the way...</p>
				<div class="btn cursor"><a href="#">Discover now</a></div>
			</div>
		</div>
		<div class="col2"><?= $thisObj->getImage('/images/prod_hair_consultant.png', 'resp') ?></div>
	</div>
</div>
<div class="row row3">
	<div class="container">
		<div class="video-gallery"></div>
	</div>
</div>
<div class="row bgwhite bbcream"><?= bbCream(); ?></div>
<div class="row winproducts"><?= winProducts(true); ?></div>
