/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _reset = true;
	var _itemID = 1;
	var _itemsTotal = 9;
	var _landingHide = false;
	var _productID;
	var _timeline = new TimelineMax({'paused':true});
	
	$(init);
	function init()
	{
		setEvents();
		setExpand();
		setLanding();
		setNavigation();
		$('.expanded .carousel .products-container .products').eq(0).clone().appendTo('.expanded .carousel .products-container');
		$('.expanded .carousel .products-container .products').eq(_itemsTotal - 1).clone().prependTo('.expanded .carousel .products-container');
		$('.expanded .carousel .products-container').append('<div class="clr"></div>');
		TweenMax.from('.logo .caption', 1, {opacity:0, x:100, ease:Back.easeIn});
		
		// auto expand
		thisExpand();
	}
	
	function thisExpand()
	{
		ADTECH.expand();
		parent.postMessage('resize', '*');
		_timeline.play();
		_reset = false;
	}
	
	function btnExpand()
	{
		TweenMax.to('.contracted .btnExpand .text', 0.5, {delay:1, opacity:0, onComplete:function(){
			TweenMax.to('.contracted .btnExpand .text', 0.5, {opacity:1, onComplete:btnExpand});
		}});
	}
	
	function setEvents()
	{
		$('.contracted .btnExpand').click(function(){
			thisExpand();
		});//btnExpand();
		
		$('.expanded .buttons .btnClose').click(function(){
			_timeline.reverse();
			TweenLite.delayedCall(1, function(){
				ADTECH.contract();
				parent.postMessage('resize', '*');
				setLanding();
				setNavigation();
				$('.expanded .buttons a').removeClass('active');
				_itemID = 1;
				_reset = true;
				_landingHide = false;
			});
		});
		
		$('.expanded .buttons .btnVideo').click(function(e){
			e.preventDefault();
			_productID = 0;
			if(!_landingHide){
				_landingHide = true;
				setContents();
			} else {
				setCarouselVideo();
			}
		});
		
		$('.expanded .buttons .btnProducts').click(function(e){
			e.preventDefault();
			_productID = 1;
			if(!_landingHide){
				_landingHide = true;
				setContents();
			} else {
				setCarouselVideo();
			}
		});
		
		$('.expanded .landing .col').hover(
			function(){
				TweenMax.to('.expanded .landing .col img', 0.5, {opacity:0.5});
				TweenMax.to($(this).find('img'), 0.5, {opacity:1});
				if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
					$(this).find('.copies').css({'background-color':'#5600da'});
					$(this).find('.copies h5, .copies p').css({'color':'#fff'});
				} else {
					TweenMax.to($(this).find('.copies'), 0.5, {css:{'background-color':'#5600da'}});
					TweenMax.to([$(this).find('.copies h5'), $(this).find('.copies p')], 0.5, {css:{'color':'#fff'}});
				}
				$('.expanded .buttons a').eq($(this).index()).addClass('active');
			},
			function(){
				TweenMax.to('.expanded .landing .col img', 0.5, {opacity:1});
				if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
					$(this).find('.copies').css({'background-color':'#fff'});
				} else {
					TweenMax.to($(this).find('.copies'), 0.5, {css:{'background-color':'#ffffff'}});
				}
				$(this).find('.copies h5, .copies p').removeAttr('style');
				if(!_landingHide){
					$('.expanded .buttons a').removeClass('active');
				}
			}
		).click(function(){
			_productID = $(this).index();
			_landingHide = true;
			setContents();
		});
		
		$.each($('.expanded .carousel .products-navigation li'), function(index, obj){
			$(obj).click(function(){
				if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
					if(_itemID == $(this).index() + 1) 
						return false;
					_itemID = $(this).index() + 1;
					setCarousel();
				}
			});
		});
		
		$('.expanded .arrows .btnArrowLeft').click(function(){
			if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
				if(_itemID > 0){
					_itemID--;
				}
				
				setCarousel();
			}
		});
		
		$('.expanded .arrows .btnArrowRight').click(function(){
			if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
				if(_itemID < _itemsTotal + 1){
					_itemID++;
				}
				
				setCarousel();
			}
		});
	}
	
	function setExpand()
	{
		_timeline.add(TweenMax.to('.contracted', 0.25, {autoAlpha:0}));
		_timeline.add(TweenMax.to('#contents', 0.75, {height:606, onComplete:setLanding, onCompleteParams:[true]}));
	}
	
	function setLanding(show)
	{
		if(show){
			TweenMax.to('.expanded .landing .colleft, .expanded .landing .colright', 0.5, {x:0});
			TweenMax.from('.expanded .landing .copies', 0.5, {autoAlpha:0, y:30, delay:0.5});
		} else {
			TweenMax.to('.expanded .landing .colleft', _reset ? 0 : 0.5, {x:-490});
			TweenMax.to('.expanded .landing .colright', _reset ? 0 : 0.5, {x:490, onComplete:function(){
				if(!_reset){
					$('.expanded .landing').hide();
				}
			}});
		}
	}
	
	function setNavigation(show)
	{
		if(show){
			//$('.expanded .buttons .navigation').show();
			$('.expanded .vc-holder').show();
		} else {
			//$('.expanded .buttons .navigation').hide();
			$('.expanded .vc-holder').hide();
			$('.expanded .arrows').hide();
			$('.expanded .landing').show();
		}
	}
	
	function setCarousel()
	{
		// reset circles
		$('.expanded .carousel .products-container .products .circle').css('opacity', 0);
		
		TweenMax.to($('.expanded .carousel .products-container'), 0.5, {css:{'left':-(980 * _itemID)}, onComplete:function(){
			if(_itemID == 0){
				_itemID = _itemsTotal;
			}
			if(_itemID == _itemsTotal + 1){
				_itemID = 1;
			}
			TweenMax.to($('.expanded .carousel .products-container'), 0, {css:{'left':-(980 * _itemID)}});
			
			// specified circle
			TweenMax.to($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), 0.25, {css:{'opacity':1}});
			TweenMax.from($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), 0.5, {y:-200, scaleX:0, scaleY:0, ease:Back.easeOut});
			
			$('.expanded .carousel .products-navigation li').removeClass('active');
			$('.expanded .carousel .products-navigation li').eq(_itemID - 1).addClass('active');
		}});
	}
	
	function setCarouselVideo(init)
	{
		$('.expanded .buttons a').removeClass('active');
		if(_productID > 0){
			$('.expanded .buttons .btnProducts').addClass('active');
			$('.expanded .arrows').show();
			$('.expanded .videoholder .video').empty();
		} else {
			$('.expanded .buttons .btnVideo').addClass('active');
			$('.expanded .arrows').hide();
			$('.expanded .videoholder .video').empty().html(
				'<div style="display:none"></div>'+
				'<object id="myExperience" class="BrightcoveExperience">'+
					'<param name="bgcolor" value="#ececec" />'+
					'<param name="width" value="771" />'+
					'<param name="height" value="434" />'+
					'<param name="playerID" value="1719536881001" />'+
					'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDi_PE120JWsev9MDwmlXCJp" />'+
					'<param name="isVid" value="true" />'+
					'<param name="isUI" value="true" />'+
					'<param name="dynamicStreaming" value="true" />'+
					'<param name="autoStart" value="true" />'+
					'<param name="includeAPI" value="true" />'+
					'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
					'<param name="templateReadyHandler" value="onTemplateReady" />'+
					'<param name="@videoPlayer" value="2868186899001" />'+
				'</object>'+
				'<script type="text/javascript">brightcove.createExperiences();</script>'
			);
		}
		
		TweenMax.to('.expanded .vc-holder .vc-contents', init ? 0 : 0.5, {y:-(467 * _productID)});
	}
	
	function setContents()
	{
		setLanding();
		setNavigation(true);
		setCarouselVideo(true);
		TweenMax.to($('.expanded .carousel .products-container'), 0, {css:{'left':-980}});
		$('.expanded .carousel .products-navigation li').eq(0).addClass('active');
	}
	
})(jQuery, window);
