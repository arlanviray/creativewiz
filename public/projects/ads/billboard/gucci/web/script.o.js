/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _initial  = true;
	var _initCnt  = 0;
	var _total    = 3;
	var _contID   = 1;
	var _prodID   = 0;
	var _prodShow = false;
	var _prodInfo = false;
	var _prodXpos;
	var _speed    = 0.5;
	var _timeline;
	
	$(init);
	function init()
	{
		setIntro(1);
		_initial = false;
	}
	
	function setIntro(id)
	{
		var intro = $('.intro');
		var duration;
		if(_initial){
			duration = 0;
		} else {
			duration = 2;
		}
		
		if(id == 1){
			_initCnt++;
		}
		
		if(_initCnt > 1){
			TweenMax.to(intro, duration, {delay:1, autoAlpha:0, onComplete:function(){
				intro.remove();
				getContents();
				getContentsEvent();
				setLogobottom(true);
			}});
			
			// get contents
			$('.contents').show();
			TweenMax.to($('.contents .left img, .contents .right img'), 0, {autoAlpha:0});
			TweenMax.to($('.contents .left img:eq(0), .contents .right img:eq(0)'), 0, {autoAlpha:1});
			
		} else {
		
			TweenMax.to(intro.find('img'), duration, {autoAlpha:0});
			TweenMax.to(intro.find('img').eq(id - 1), 2, {autoAlpha:1, onComplete:setIntro, onCompleteParams:[(id == _total) ? 1 : id + 1]});
		}
	}
	
	function getContents()
	{
		if(_contID < _total){
			_contID++;
		} else {
			_contID = 1;
		}
		
		// timeline
		_timeline = new TimelineMax({onComplete:getContents});
		_timeline.add(TweenMax.to($('.contents .left img, .contents .right img'), _speed, {delay:2, autoAlpha:0}));
		_timeline.insert(TweenMax.to($('.contents .left img:eq('+ (_contID - 1) +'), .contents .right img:eq('+ (_contID - 1) +')'), _speed, {delay:2, autoAlpha:1}));
	}
	
	function setContents(show)
	{
		if(show){
			TweenMax.to($('.contents .left'), _speed, {x:0});
			TweenMax.to($('.contents .right'), _speed, {x:485});
			setNavigation(false);
		} else {
			TweenMax.to($('.contents .left'), _speed * 2, {x:-485});
			TweenMax.to($('.contents .right'), _speed * 2, {x:970});
			setNavigation(true);
		}
	}
	
	function getContentsEvent()
	{
		$('.contents .left img, .contents .right img').hover(
			function(){
				_timeline.pause();
			},
			function(){
				if(!_prodShow){
					_timeline.resume();
				}
			}
		).click(function(){
			_contID = $(this).attr('id').replace('t', '');
			
			setContents(false);
			setGallery();
			$('.navigation .nav2').click();
			
			_prodShow = true;
		});
		
		// gallery
		$('.contents .gallery img').click(function(){
			if(!_prodInfo){
				_prodID = $(this).attr('id').replace('p', '');
				_prodXpos = $(this).position().left;
				
				$('.contents .gallery .group'+ _contID +' img').hide();
				$('.contents .arrow').hide();
				
				$(this).show();
				
				if(_prodXpos > 100){
					TweenMax.to($(this), 1, {left:80});
				}
				
				setLogotop(true);
				getProductInfo();
				TweenMax.from($('.contents .info'), _speed, {delay:_speed, autoAlpha:0});
			}
			
			_prodInfo = true;
		});
		
		// gallery arrows
		$('#arrowleft').click(function(){
			if(!TweenMax.isTweening($('.contents .gallery'))){
				if(_contID > 0){
					_contID--;
				}
				
				setGallery();
			}
		});
		
		$('#arrowright').click(function(){
			if(!TweenMax.isTweening($('.contents .gallery'))){
				if(_contID < _total + 1){
					_contID++;
				}
				
				setGallery();
			}
		});
		
		// navigation
		$('.navigation .nav1').click(function(){
			removeClassActive();
			$(this).addClass('active');
			
			if($('#videoholder #video').length < 1){
				getVideo();
				TweenMax.to($('#videoholder .info'), _speed, {delay:_speed, left:24});
				TweenMax.to($('#videoholder'), 0, {autoAlpha:0});
				TweenMax.to($('#videoholder'), _speed, {autoAlpha:1, top:0});
				TweenMax.to($('.contents'), _speed, {top:250});
				$('.logotop .txt').hide();
			}
		});
		
		$('.navigation .nav2').click(function(){
			removeClassActive();
			$(this).addClass('active');
			
			if($('#videoholder #video').length > 0){
				TweenMax.to($('#videoholder .info'), _speed, {left:-400});
				TweenMax.to($('#videoholder'), _speed, {delay:_speed, autoAlpha:0, top:-250, onComplete:function(){
					$('#videoholder').empty();
					$('.logotop .txt').show();
				}});
				TweenMax.to($('.contents'), _speed, {delay:_speed, top:0});
			}
		});
		
		$('.navigation .nav3').click(function(){
			// window.open('http://www.gucci.com/uk', '_blank');
			ADTECH.click('GUCCI UK');
		});
	}
	
	function setGallery()
	{
		var thespeed = 0;
		if(_prodShow){
			thespeed = _speed * 2;
		} else {
			$('.contents .gallery .group1').clone().appendTo('.contents .gallery');
			$('.contents .gallery .group3').clone().prependTo('.contents .gallery');
		}
		
		TweenMax.to($('.contents .gallery'), thespeed, {x:-(970 * _contID), onComplete:function(){
			if(_contID == 0){
				_contID = _total;
			}
			if(_contID == _total + 1){
				_contID = 1;
			}
			TweenMax.to($('.contents .gallery'), 0, {x:-(970 * _contID)});
		}});
	}
	
	function getProductInfo()
	{
		var link = '';
		
		if(_prodID == 1){
			link = '<a href="#" onclick="ADTECH.click(\'01 GUCCI LADY LOCK MEDIUM TOTE BAG\')">SHOP NOW ></a>';
		}
		if(_prodID == 2){
			link = '<a href="#" onclick="ADTECH.click(\'02 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG\')">SHOP NOW ></a>';
		}
		if(_prodID == 3){
			link = '<a href="#" onclick="ADTECH.click(\'03 GUCCI LADY LOCK BRIEFCASE CLUTCH\')">SHOP NOW ></a>';
		}
		if(_prodID == 4){
			link = '<a href="#" onclick="ADTECH.click(\'04 GUCCI KIM LACE UP BOOTIE\')">SHOP NOW ></a>';
		}
		if(_prodID == 5){
			link = '<a href="#" onclick="ADTECH.click(\'05 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG\')">SHOP NOW ></a>';
		}
		if(_prodID == 6){
			link = '<a href="#" onclick="ADTECH.click(\'06 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG\')">SHOP NOW ></a>';
		}
		if(_prodID == 7){
			link = '<a href="#" onclick="ADTECH.click(\'07 GUCCI LADY LOCK WALLET\')">SHOP NOW ></a>';
		}
		if(_prodID == 8){
			link = '<a href="#" onclick="ADTECH.click(\'08 GUCCI BLACK AND RED CRYSTAL PENDANT NECKLACE\')">SHOP NOW ></a>';
		}
		if(_prodID == 9){
			link = '<a href="#" onclick="ADTECH.click(\'09 GUCCI LADY LOCK BAMBOO HANDLE BAG IN BLACK PYTHON\')">SHOP NOW ></a>';
		}
		if(_prodID == 10){
			link = '<a href="#" onclick="ADTECH.click(\'10 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG\')">SHOP NOW ></a>';
		}
		if(_prodID == 11){
			link = '<a href="#" onclick="ADTECH.click(\'11 GUCCI KIM KNEE BOOT\')">SHOP NOW ></a>';
		}
		if(_prodID == 12){
			link = '<a href="#" onclick="ADTECH.click(\'12 GUCCI KIM LACE UP BOOTIE\')">SHOP NOW ></a>';
		}
		
		$('.contents').append(
			'<div class="info">'+
				'<h2>'+ discoverData.data[_prodID - 1].title +'</h2>'+
				'<p>'+ discoverData.data[_prodID - 1].copy +'</p>'+
				'<div id="shopnow">'+ link +'</div>'+
			'</div>'
		);
		
		// shop now
		$('.contents .info #shopnow a').click(function(e){
			e.preventDefault();
			// window.open(discoverData.data[_prodID - 1].link, '_blank');
			// console.log('>> '+ _prodID);
			
			// NOTE: Only to initialise the click event labels within ADTECH, the real deal is above.
			// Same procedure as "Selfridges MPU" but this does not work.
			
			switch(_prodID)
			{
				case 1:
					ADTECH.click('01 GUCCI LADY LOCK MEDIUM TOTE BAG');
					break;
				case 2:
					ADTECH.click('02 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG');
					break;
				case 3:
					ADTECH.click('03 GUCCI LADY LOCK BRIEFCASE CLUTCH');
					break;
				case 4:
					ADTECH.click('04 GUCCI KIM LACE UP BOOTIE');
					break;
				case 5:
					ADTECH.click('05 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG');
					break;
				case 6:
					ADTECH.click('06 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG');
					break;
				case 7:
					ADTECH.click('07 GUCCI LADY LOCK WALLET');
					break;
				case 8:
					ADTECH.click('08 GUCCI BLACK AND RED CRYSTAL PENDANT NECKLACE');
					break;
				case 9:
					ADTECH.click('09 GUCCI LADY LOCK BAMBOO HANDLE BAG IN BLACK PYTHON');
					break;
				case 10:
					ADTECH.click('10 GUCCI LADY LOCK MEDIUM BAMBOO HANDLE BAG');
					break;
				case 11:
					ADTECH.click('11 GUCCI KIM KNEE BOOT');
					break;
				case 12:
					ADTECH.click('12 GUCCI KIM LACE UP BOOTIE');
					break;
			}
		});
	}
	
	function getVideo()
	{
		$('#videoholder').append(
			'<div class="info">'+
				'<h2>EXPERIENCE AUTUMN/WINTER 2013</h2>'+
				'<p>See the luxurious pieces from Gucci\'s autumn/winter 2013 collection come to life in this exclusive campaign video.</p>'+
			'</div>'+
			'<div id="video">'+
				'<div style="display:none"></div>'+
				'<object id="myExperience" class="BrightcoveExperience">'+
					'<param name="bgcolor" value="#000000" />'+
					'<param name="width" value="400" />'+
					'<param name="height" value="190" />'+
					'<param name="playerID" value="1719536881001" />'+
					'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDi_PE120JWsev9MDwmlXCJp" />'+
					'<param name="isVid" value="true" />'+
					'<param name="isUI" value="true" />'+
					'<param name="dynamicStreaming" value="true" />'+
					'<param name="autoStart" value="true" />'+
					'<param name="includeAPI" value="true" />'+
					'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
					'<param name="templateReadyHandler" value="onTemplateReady" />'+
					'<param name="@videoPlayer"  value="2708869810001" />'+
				'</object>'+
				'<script type="text/javascript">brightcove.createExperiences();</script>'+
			'</div>'
		);
	}
	
	function setLogotop(clickable)
	{
		if(clickable){
			$('.logotop .txt').html('see full ELLE edit >').css('pointer-events', 'auto')
			.click(function(){
				$('.contents .info').remove();
				TweenMax.to($('.contents .gallery .group'+ _contID +' img#p'+ _prodID), _speed, {left:_prodXpos, onComplete:function(){
					$('.contents .gallery .group'+ _contID +' img').show();
					$('.contents .arrow').show();
					setLogotop(false);
					_prodInfo = false;
				}});
			});
		} else {
			$('.logotop .txt').html('the ELLE edit of the new collection').css('pointer-events', 'none');
		}
	}
	
	function setLogobottom(show)
	{
		TweenMax.to($('.logobottom'), _speed, {top:show ? 210 : 250});
	}
	
	function setNavigation(show)
	{
		if(show){
			TweenMax.to($('.logotop'), _speed, {delay:_speed, top:0});
			TweenMax.to($('.navigation'), _speed, {delay:_speed, top:210});
			setLogotop(false);
			setLogobottom(false);
			
		} else {
			
			TweenMax.to($('.logotop'), _speed, {top:-40});
			TweenMax.to($('.navigation'), _speed, {top:250});
			TweenMax.delayedCalls(_speed, setLogobottom, [true]);
		}
	}
	
	function removeClassActive()
	{
		$('.navigation .nav').removeClass('active');
	}
	
})(jQuery, window);
