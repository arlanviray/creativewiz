<div class="row row1">
	<div class="container">
		<h2>Youthful Vitality<br />BB cream</h2>
		<p>This one-step multi-tasker helps to replenish, style and protect your hair. Formulated with antioxidants and UV filter, it improves manageability to make styling even easier. Use daily on wet or dry hair to replenish and renew your hair’s natural body and fullness.</p>
		<div class="image">
			<?= $thisObj->getImage('/images/prod_bb_cream.png', 'resp') ?>
			<?= $thisObj->getImage('/images/icon_a_first_for_dove.png', 'icon') ?>
			<div class="text textright"><p><strong>Directions:</strong></p>Apply 4-5 pumps on to hair<br />from mid-lengths to ends,<br />avoiding roots. Do not rinse<br />out. Style as usual</div>
			<div class="text textleft cursor">Claim your free<br />sample below</div>
		</div>
	</div>
</div>
<div class="row row2 bgwhite" id="theform">
	<div class="container">
		<div class="form">
			<h2>Personal details:</h2>
			<ul class="rfield1">
				<li>Firstname<span>*</span><br /><input type="text" class="field" name="uFirstname"></li>
				<li>Surname<span>*</span><br /><input type="text" class="field" name="uSurname"></li>
			</ul>
			<ul class="rfield2">
				<li>Street Address<span>*</span><br /><input type="text" class="field" name="uAddress1"></li>
			</ul>
			<ul class="rfield3">
				<li>Address Line 2<br /><input type="text" class="field" name="uAddress2"></li>
			</ul>
			<ul class="rfield4">
				<li>Postcode<span>*</span><br /><input type="text" class="field" name="uPostcode"></li>
				<li>Country<br />
					<select class="field" name="uCountry">
					<?php
						foreach (getCountryArray() as $key => $value) {
							if($key == 'GB'){
								echo '<option value="'. $value .'" selected>'. $value .'</option>';
							} else {
								echo '<option value="'. $value .'">'. $value .'</option>';
							}
						}
					?>
					</select>
				</li>
			</ul>
			<ul class="rfield5">
				<li>Email<span>*</span><br /><input type="text" class="field" name="uEmail"></li>
				<li>Phone number<br /><input type="text" class="field" name="uPhone"></li>
			</ul>
			<ul class="rfield6">
				<li><input type="checkbox" class="field" name="uOptin1" id="uOptin1"></li>
				<li><label for="uOptin1">Please tick here if you would like to receive the latest special offers, promotions and product information from Hearst Magazines UK.</label></li>
			</ul>
			<ul class="rfield7">
				<li><input type="checkbox" class="field" name="uOptin2" id="uOptin2"></li>
				<li><label for="uOptin2">Please tick here if you would like to receive email updates from Dove.</label></li>
			</ul>
			<div class="btn cursor submit"><a href="#">Submit</a></div>
			<?= termsAndConditions(); ?>
		</div>
	</div>
</div>
<div class="row winproducts"><?= winProducts(); ?></div>