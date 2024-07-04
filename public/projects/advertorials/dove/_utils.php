<?php

	function bbCream()
	{
		global $thisObj;

		$html = '<div class="container bbcream">';
			$html.= '<div class="col1">';
				$html.= '<div class="copy">';
					$html.= '<h2>Dove Advanced<br />hair series<br />Youthful VITALITY<br />BB Cream</h2>';
					$html.= '<div class="btn cursor"><a href="'. $thisObj->setUrlParam('trial') .'" class="evt-trial">Claim your free sample</a></div>';
				$html.= '</div>';
			$html.= '</div>';
			$html.= '<div class="col2">'. $thisObj->getImage('/images/prod_bb_cream.png', 'resp') .'</div>';
		$html.= '</div>';

		return $html;
	}

	function winProducts($htop=null)
	{
		global $thisObj;
		$header = 'Win luxury Dove<br />Advanced Hair Series<br />Products';
		
		$html = '<div class="container winproducts">';
			if($htop) $html.= '<h2>'. $header .'</h2>';
			$html.= '<div class="image">'. $thisObj->getImage('/images/prod_hair_series.png', 'resp') .'</div>';
			if(!$htop) $html.= '<h2 style="margin-top: 30px;">'. $header .'</h2>';
			$html.= '<div class="btn cursor"><a href="'. $thisObj->setUrlParam('win') .'" class="evt-win">Enter now</a></div>';
		$html.= '</div>';

		return $html;
	}

	function termsAndConditions($win=null)
	{
		$html = '<div class="tandc">';
		if($win){
			$html.= 'Open to UK residents aged 18 and over. To enter please fill in details in the form above. This competition opens on 1st August, 2014 and closes at midnight on 30th November. Answers received after the closing date will not be considered. The prize is three Dove Advanced Hair Series full product range hampers and 25 runner up prizes per range. The winner will be randomly selected from the entries received. Hearst reserves the right to amend the terms and conditions for this competition at any time without notice. See website for full terms and conditions';
			$html.= '<br /><a href="http://www.hearst.co.uk/terms-and-conditions.html" target="_blank">http://www.hearst.co.uk/terms-and-conditions.html</a>';
		} else {
			$html.= 'Open to UK residents aged 18 and over. To receive your free sample of the Dove Advanced Hair Series BB Cream please fill in details in the above form. Details shall be sent to Dove, Unilver who shall send out samples to the stated address.';
		}
		$html.= '</div>';
		
		return $html;
	}

	function productLinks($id, $index)
	{
		$dataLinks = array(
			array(
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Oxygen-Moisture-Shampoo-250ml_1498709/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Oxygen-Moisture-Shampoo-250ml/p/243707" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284657335" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Series-Moisture-Shampoo/dp/B00KTBYEV6/ref=sr_1_2/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-2&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Oxygen-Moisture-Conditioner-250ml_1498711/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Oxygen-Moisture-Conditioner-250ml/p/243401" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284628831" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Series-Moisture-Conditioner/dp/B00KTBYH5O/ref=sr_1_5/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-5&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Oxygen-Moisture-Souffle-Treatment-200ml_1498713/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Oxygen-Moisture-Souffl%C3%A9-Treatment-200ml/p/243206" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284628664" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Moisture-Souffle-Treatment/dp/B00KXXXRS6/ref=sr_1_6/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-6&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Oxygen-Moisture-Root-Lift-Spray-125ml_1498715/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Oxygen-Moisture-Root-Lift-Spray-150ml/p/243004" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb inactive"><a href="#" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Series-Oxygen-Moisture/dp/B00KXXXS0S/ref=sr_1_1/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-1&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
			),

			array(
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Youthful-Vitality-Shampoo-250ml_1498697/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Youthful-Vitality-Shampoo-250ml/p/244508" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284657813" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Youthful-Vitality-Shampoo/dp/B00KTBYNDU/ref=sr_1_4/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-4&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Youthful-Vitality-Conditioner-250ml_1498699/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/Hair/Treatments/Hair-Treatment-Other/Dove-Youthful-Vitality-Conditioner-250ml/p/243606" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284629142" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Youthful-Vitality-Conditioner/dp/B00KTBYPGA/ref=sr_1_10/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-10&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Youthful-Vitality-Thickening-Essence125ml_1498701/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Youthful-Vitality-Thickening-Essence-125ml/p/242601" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb inactive"><a href="#" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Youthful-Vitality-Thickening/dp/B00KXXXV5U/ref=sr_1_7/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-7&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Youthful-Vitality-Hair-BB-Cream-125ml_1372043/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Youthful-Vitality-BB-Cream-125ml/p/242502" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284657972" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Series-Youthful-Vitality/dp/B00KXXXV5K/ref=sr_1_9/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-9&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
			),

			array(
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Pure-Care-Dry-Oil-Shampoo-250ml_1498703/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/seasonal/DEFAULT/Dove-Pure-Care-Dry-Oil-Shampoo-250ml/p/244000" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284657554" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Hair-Series-Shampoo/dp/B00KTBYJLQ/ref=sr_1_3/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-3&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Pure-Care-Dry-Oil-Conditioner-250ml_1498705/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/Hair/Haircare-Oils/Haircare-Oils/Dove-Pure-Care-Dry-Oil-Conditioner-250ml/p/243504" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=284629058" target="_blank" class="tesco"></a></div>',
					'<div class="icon"><a href="http://www.amazon.co.uk/Dove-Advanced-Hair-Series-Conditioner/dp/B00KTBYLKA/ref=sr_1_8/277-4656703-3956838?s=beauty&ie=UTF8&qid=1406540381&sr=1-8&keywords=dove+advanced+hair+series" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Advanced-Hair-Series-Pure-Care-Oil-Treatment-Mask-200ml_1498707/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb inactive"><a href="#" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb inactive"><a href="#" target="_blank" class="tesco"></a></div>',
					'<div class="icon inactive"><a href="#" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Hair-Pure-Care-Oil-Nourishing-Treatment-For-All-Hair-Types_1375539/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/Hair/Haircare-Oils/Haircare-Oils/Dove-Dry-Oil-Nourishing-100ml/p/737463#.U9fEG_ldX0w" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/Product/Details/?id=278631547" target="_blank" class="tesco"></a></div>',
					'<div class="icon inactive"><a href="#" target="_blank" class="amazon"></a></div>',
				),
				array(
					'<div class="icon bb"><a href="http://www.boots.com/en/Dove-Pure-Care-Oil-Restorative-Treatment-for-Mature-Hair-100ml_1375541/" target="_blank" class="boots"></a></div>',
					'<div class="icon bb"><a href="http://www.superdrug.com/Hair/Haircare-Oils/Haircare-Oils/Dove-Dry-Oil-Rejuvenating-100ml/p/737467#.U9fEIvldX0w" target="_blank" class="superdrugs"></a></div>',
					'<div class="icon bb"><a href="http://www.tesco.com/groceries/product/details/?id=278631639" target="_blank" class="tesco"></a></div>',
					'<div class="icon inactive"><a href="#" target="_blank" class="amazon"></a></div>',
				),
			),
		);

		$html = '';
		foreach($dataLinks[$id][$index] as $key => $val){
			$html.= $val;
		}
		$btnprod = '<div class="btn cursor btnprod"><a href="#">Buy now<div class="arrow"></div></a></div>';

		return $btnprod. '<div class="prodlinks"><div class="icons">'. $html .'</div></div>';
	}

	// results
	$hcfound =  false;
	$hcresults = array('oxygen-moisture', 'youthful-vitality', 'pure-care');
	if($thisObj->getSection() == 'result'){
		foreach($hcresults as $key => $result){
			if($result == $thisObj->getSubsection()){
				$hcfound = true;
				$hcresultid = $key + 1;
			}
		}
		if(in_array($thisObj->getSubsection(), $hcresults)){
			// do nothing
		} else {
			header('Location: /#hairconsultation');
			exit;
		}
	}
	
?>
