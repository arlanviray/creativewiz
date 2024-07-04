<div class="rows">
	<div class="row row1" id="theform">
		<div class="container">
			<!--h2>Lorem Ipsum Dolor</h2-->
			<p>With summer almost gone and Autumn just round the corner, there’s no better time to spruce up your wardrobe and try an amazing new look. And what better way to do so than with Very’s latest collection? Full of winter florals, moody jewel tones, bold new textures and luxe fabrics, it’s all you need to look on trend for Autumn/Winter. Sound dreamy? We’re offering one lucky winner £250 to spend on the latest collection at Very. Whether you’re after a new winter coat, dress or shoes, the only difficulty will be to pick! Now what are you waiting for? Here’s how enter.<p>
			<div class="form">
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
					<li>Open to UK residents aged 18 and over. To enter please complete the entry form above. This competition opens on 18.08.14 and closes at 00:00 on 18.09.14. Entries received after the closing date will not be considered. The prize is a £250 Very Voucher. 1 winner will be randomly selected from the entries received. Hearst reserves the right to amend the terms and conditions for this competition at any time without notice. By supplying your contact details you consent to Hearst Magazines UK contacting you directly with offers, products and services reflecting your preferences. See website for full terms and conditions, please <a href="http://www.hearst.co.uk/terms-and-conditions" target="_blank">click here.</a></li>
				</ul>
				<ul class="rfield7">
					<li><input type="checkbox" class="field" name="uOptin1" id="uOptin1"></li>
					<li><label for="uOptin1">Please tick here if you would prefer not to hear from Hearst Magazines UK.</label></li>
				</ul>
				<ul class="rfield8">
					<li><input type="checkbox" class="field" name="uOptin2" id="uOptin2"></li>
					<li><label for="uOptin2">Please tick here if you would like to receive email updates from <a href="http://www.very.co.uk/" target="_blank">Very.co.uk</a></label></li>
				</ul>
				<ul class="rfield9">
					<li>Your phone number will only be used for the purpose of contacting the winner. For Hearst Magazines UK data policy, visit <a href="http://www.hearst.co.uk//Data-protection.html" target="_blank">hearst.co.uk/dp.</a></li>
				</ul>
				<div class="cursor submit">SUBMIT</div>
			</div>
		</div>
	</div>
</div>