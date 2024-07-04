<?php

	function getMainImage()
	{
		global $thisObj;

		$html = '<div id="main-image" style="background-image: url('. $thisObj->setUrlPath('/images/'. $thisObj->getSection() .'_main.jpg') .')">';
			$html.= '<div class="container"><h1 class="'. $thisObj->getSection() .'">';
				switch($thisObj->getSection()){
					case 'beauty-edits':
						$html.= 'Very Beauty Edits';
						break;
					case 'events':
						$html.= 'Very Events';
						break;
					case 'quiz':
						$html.= 'who’s your Celebrity<br />style icon?';
						break;
					case 'win':
						$html.= 'Win £250 to spend<br />at very.co.uk';
						break;
					default:
						$html.= 'Your Exclusive Fashion Edit<p>Be trendy, shop & have fun</p>';
				}
			$html.= '</h1></div>';
		$html.= '</div>';

		return $html;
	}
	
?>
