<?php
	/**
	 * @author: Arlan Viray
	 * @email: arlanv555@gmail.com
	 */
	
	error_reporting(E_ERROR | E_PARSE);
	require_once('include/Get_Values.php');
	require_once('include/Mobile_Detect.php');

	class theObjects extends Mobile_Detect
	{
		private $_sec;
		private $_sub;
		private $_sid;
		public  $_rewrite = 1;
		public  $_nav     = array('home', 'experience', 'trial', 'buy', 'win');
		public  $_title   = 'Dove Advanced Hair Series';
		public 	$_social  = array(
			'facebook' => 'https://www.facebook.com/dove',
			'twitter'  => 'https://twitter.com/DoveUK',
			'youtube'  => 'http://www.youtube.com/user/DoveUKI',
		);
		
		public function __construct()
		{
			$this->_sec = $_GET['sec'];
			$this->_sub = $_GET['sub'];
			$this->_sid = $_GET['sid'];
			parent::__construct();
		}
		
		public function setSection($str=null)
		{
			$this->_sec = $str;
		}
		
		public function getSection()
		{
			return $this->_sec;
		}
		
		public function getSubsection()
		{
			return $this->_sub;
		}
		
		public function getSubId()
		{
			return $this->_sid;
		}

		public function setUrlParam($url)
		{
			$url = explode('/', $url);
			$sec = $this->setUrlString($url[0]);
			$sub = $this->setUrlString($url[1]);
			$sid = $this->setUrlString($url[2]);
			if($this->_rewrite){
				return '/'. $sec . ($sub ? '/'. $sub : '') . ($sid ? '/'. $sid  : '');
			} else {
				return '?sec='. $sec . ($sub ? '&sub='. $sub : '') . ($sid ? '&sid='. $sid : '');
			}
		}
		
		public function setUrlString($str)
		{
			return strtolower(strip_tags(str_replace(array(' & ','?',"'",' '), array('','','','-'), $str)));
		}

		public function getDomainName()
		{
			$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
			$domainName = $_SERVER['HTTP_HOST'];
			return $protocol . $domainName;
		}

		public function setUrlPath($url=null)
		{
			return $this->getDomainName() . $url;
		}

		public function getImage($img, $cls=null, $w=null, $h=null)
		{
			$size  = getimagesize(str_replace('/images', 'images', $img));
			$width = $w ? $w : $size[0];
			$height= $h ? $h : $size[1];
			$html = '';
			$html.= '<img src="'. $this->setUrlPath($img) .'" width="'. $width .'" height="'. $height .'" '. ($cls ? 'class="'. $cls .'"' : '') .' />';
			return $html;
		}

		public function getNavigation($mobile=null)
		{
			$html = '<ul>';
			foreach ($this->_nav as $key => $title) {
				$navTitle = $this->setUrlString($title);
				if($navTitle == $this->getSection()){
					$html.= '<li class="active">'. $title .'</li>';
				} else {
					if($key > 0){
						$html.= '<li><a href="'. $this->setUrlParam($navTitle) .'">'. $title .'</a></li>';
					} else {
						$html.= '<li><a href="/">'. $title .'</a></li>';
					}
				}
			}
			$html.= '</ul>';
			if($mobile){
				$html.= '<div class="social">';
					$html.= '<a href="'. $this->_social['facebook'] .'" class="evt-facebook" target="_blank">'. $this->getImage('/images/social_mobile_facebook.png') .'</a>';
					$html.= '<a href="'. $this->_social['twitter'] .'" class="evt-twitter" target="_blank">'. $this->getImage('/images/social_mobile_twitter.png') .'</a>';
					$html.= '<a href="'. $this->_social['youtube'] .'" class="evt-youtube" target="_blank">'. $this->getImage('/images/social_mobile_youtube.png') .'</a>';
				$html.= '</div>';
			}
			return $html;
		}
	}
	
	$thisObj = new theObjects;
	if(!$thisObj->getSection()){
		$thisObj->setSection('home');
	}
	
	require_once('_utils.php');
?>
