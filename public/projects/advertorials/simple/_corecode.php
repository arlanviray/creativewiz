<?php
	/** 
	 * @uathor: Arlan Viray
	 * @email: arlanv555@gmail.com
	 * Copyright (c) 2015
	 */
	 
	error_reporting(E_ERROR | E_PARSE);
	require_once('include/Mobile_Detect.php');

	class theObjects extends Mobile_Detect
	{
		private $_sec;
		private $_sub;
		private $_sid;
		private $_ind;
		public  $_rewrite = 1;
		public  $_title   = 'Simple';
		public  $_nav     = array(
			'Take the quiz', 
			'bloggers' => array(
				'Cherry Menlove',
				'Tar Mar',
				'Yes Chef',
				'Zoe Newlove',
			),
			'Win' 
		);
		
		public function __construct()
		{
			$this->_sec = $_GET['sec'];
			$this->_sub = $_GET['sub'];
			$this->_sid = $_GET['sid'];
			$this->_ind = $_GET['ind'];
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

		public function getIndex()
		{
			return $this->_ind;
		}

		public function setUrlParam($url)
		{
			$url = explode('/', $url);
			$sec = $this->setUrlString($url[0]);
			$sub = $this->setUrlString($url[1]);
			$sid = $this->setUrlString($url[2]);
			$ind = $this->setUrlString($url[3]);

			if($this->_rewrite){
				return '/'. $sec . ($sub ? '/'. $sub : '') . ($sid ? '/'. $sid  : '') . ($ind ? '/'. $ind  : '');
			} else {
				return '?sec='. $sec . ($sub ? '&sub='. $sub : '') . ($sid ? '&sid='. $sid : '') . ($ind ? '&ind='. $ind : '');
			}
		}
		
		public function setUrlString($str)
		{
			return strtolower(strip_tags(str_replace(array(' & ','?',"'",' '), array('','','','-'), $str)));
		}

		public function setValue4Tracking($str)
		{
			return str_replace(array(' ','-',"'"), '', strtolower($str));
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

		public function getImage($img, $cls=null, $w, $h)
		{
			$size  = getimagesize(str_replace(['/images', '/projects'], ['images', 'projects'], $img));
			$width = $w ? $w : $size[0];
			$height= $h ? $h : $size[1];
			$html = '';
			$html.= '<img src="'. $this->setUrlPath($img) .'" width="'. $width .'" height="'. $height .'" '. ($cls ? 'class="'. $cls .'"' : '') .' />';
			return $html;
		}

		public function getDescription()
		{
			return $this->_nav[$this->getSectionIndex()]['description'];
		}

		public function getSectionIndex()
		{
			foreach ($this->_nav as $key => $title) {
				$navTitle = $this->setUrlString($title['sectionname']);
				if($navTitle == $this->getSection()){
					if($this->getSection())
						$index = $key;
					else
						$index = 0;
				} 
			}

			return $index;
		}
	}
	
	// create object 
	$thisObj = new theObjects;

	if(!$thisObj->getSection()){
		$thisObj->setSection('home');
	}
	if($thisObj->getSubsection()){
		// $subsection = '-subcategory';
	}
	if($thisObj->getSubId()){
		// $subsection = '-subproduct';
	}

	// set navigation
	$navigation = $thisObj->_nav;

	// get tempate file
	$tplfile = '_tpl/'. $thisObj->getSection() . $subsection .'.php';

	// set 404
    if(!file_exists($tplfile)){
    	header('Location: 404'); exit;
    }

?>
