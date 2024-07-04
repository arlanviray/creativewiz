<?php
	
	$t_category = 'nav bar';

	echo '<ul>';
	foreach ($navigation as $key => $nval) {
		if(is_array($nval)){
			echo '<li class="subnav">';
				echo '<a href="#" class="nohover">Contributors</a>';
				echo '<ol>';
					foreach ($nval as $bkey => $bval) {
						if($thisObj->getSubsection() === $thisObj->setUrlString($bval)){
							$active = 'class="active"';
						} else {
							$active = '';
						}
						echo '<li '. $active .'><a href="/bloggers/'. $thisObj->setUrlString($bval) .'" data-category="'. $t_category .'" data-label="contributors - '. $thisObj->setValue4Tracking($bval) .'">'. $bval .'</a></li>';
					}
				echo '</ol>';
			echo '</li>';
			
		} else {

			if($key > 0) {
				echo '<li><a href="/'. $thisObj->setUrlString($nval) .'" data-category="'. $t_category .'" data-label="'. $thisObj->setValue4Tracking($nval) .'">'. $nval .'</a></li>';
			
			} else {

				if($thisObj->getSection() == 'home'){
					$active = 'class="active"';
				} else {
					$active = '';
				}
				echo '<li><a href="/" data-category="'. $t_category .'" data-label="'. $thisObj->setValue4Tracking($nval) .'">'. $nval .'</a></li>';
			}
		}
	}
	echo '</ul>';
	
?>