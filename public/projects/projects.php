<?php

	class Projects {
		private $_type;
		private $_subtype;
		private $_title;
		private $_index;
		private $_contents;
		
		public function __construct() {
			$this->_type    = $_GET["type"];
			$this->_subtype = $_GET["subtype"];
			$this->_title   = $_GET["title"];
			$this->_index   = $_GET["index"];
		}

    public function isList() {
			return $this->_type === "list";
		}
		
		public function getType() {
			return $this->_type;
		}

        public function getSubType() {
			return $this->_subtype;
		}
		
		public function getTitle() {
			return $this->_title;
		}

		public function getIndex() {
			return $this->_index;
		}

		public function setContents($incFiles = array()) {
			$items = array();
			foreach($incFiles as $key => $file) {
				// set "include" to get return array within the file
				array_push($items, include $file);
			}

			$this->_contents = array_merge($items);
		}

		public function getContents() {
			return $this->_contents;
		}

		public function getItem() {
			foreach($this->getContents() as $contentVal) {
				if ($this->getType() === $contentVal['type'] && $this->getSubType() === $contentVal['subtype']) {
					
					$itemPosition = array("position" => $contentVal['position']);

					foreach($contentVal['items'] as $key => $item) {
						if ($this->getIndex() === md5($key)) {
							return array_merge($item, $itemPosition);
						}
					}					
				}
			}
		}
		
		public function setUrlString($str) {
			return strtolower(strip_tags(str_replace(array(' & ','?',"'",' '), array('','','','-'), $str)));
		}

		public function setUrlParam($type, $subtype, $title, $index) {
			return "/". $type ."/". $subtype ."/". $this->setUrlString($title) ."/". $index;
		}

		public function getDomainName() {
			$protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
			$domainName = $_SERVER['HTTP_HOST'];
			return $protocol . $domainName;
		}

		public function setUrlPath($url = null) {
			return $this->getDomainName() . $url;
		}
	}
	
?>
