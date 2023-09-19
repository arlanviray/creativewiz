/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _reset = true;
	var _itemID = 1;
	var _itemsTotal = 4;
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
		TweenMax.to('.contracted .btnExpand', 0.5, {delay:1, opacity:0, onComplete:function(){
			TweenMax.to('.contracted .btnExpand', 0.5, {opacity:1, onComplete:btnExpand});
		}});
	}
	
	function setEvents()
	{
		$('.contracted .btnExpand').hover(
			function(){
				thisExpand();
			},
			function(){
				// do nothing...
			}
		);
		btnExpand();
		
		$('.expanded .buttons .btnClose').click(function(){
			_timeline.reverse();
			TweenLite.delayedCall(1, function(){
				ADTECH.contract();
				parent.postMessage('resize', '*');
				setLanding();
				setNavigation();
				_itemID = 1;
				_reset = true;
			});
		});
		
		$('.expanded .buttons .btnVideo').click(function(e){
			e.preventDefault();
			_productID = 0;
			setCarouselVideo();
		});
		
		$('.expanded .buttons .btnProducts').click(function(e){
			e.preventDefault();
			_productID = 1;
			setCarouselVideo();
		});
		
		$('.expanded .landing .col').hover(
			function(){
				TweenMax.to($(this).find('img'), 0.5, {opacity:0.8});
			},
			function(){
				TweenMax.to($(this).find('img'), 0.5, {opacity:0.5});
			}
		).click(function(){
			_productID = $(this).index();
			setContents();
		});
		
		$.each($('.expanded .carousel .infos'), function(index, obj){
			$(obj).find('.btnDetails').click(function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					TweenMax.to($(obj), 0.5, {css:{bottom:-108}});
				} else {
					$(this).addClass('active');
					TweenMax.to($(obj), 0.5, {css:{bottom:0}});
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
		_timeline.add(TweenMax.to('#contents', 0.75, {height:600, onComplete:setLanding, onCompleteParams:[true]}));
	}
	
	function setLanding(show)
	{
		if(show){
			TweenMax.to('.expanded .landing .colleft, .expanded .landing .colright', 0.5, {x:0});
			TweenMax.from('.expanded .landing .copies', 0.5, {autoAlpha:0, y:30, delay:0.5});
		} else {
			TweenMax.to('.expanded .landing .colleft', _reset ? 0 : 0.5, {x:-418});
			TweenMax.to('.expanded .landing .colright', _reset ? 0 : 0.5, {x:418, onComplete:function(){
				if(!_reset){
					$('.expanded .landing').hide();
				}
			}});
		}
	}
	
	function setNavigation(show)
	{
		if(show){
			$('.expanded .buttons .navigation').show();
			$('.expanded .vc-holder').show();
		} else {
			$('.expanded .buttons .navigation').hide();
			$('.expanded .vc-holder').hide();
			$('.expanded .arrows').hide();
			$('.expanded .landing').show();
		}
	}
	
	function setCarousel()
	{
		TweenMax.to($('.expanded .carousel .products-container'), 0.5, {x:-(852 * _itemID), onComplete:function(){
			if(_itemID == 0){
				_itemID = _itemsTotal;
			}
			if(_itemID == _itemsTotal + 1){
				_itemID = 1;
			}
			TweenMax.to($('.expanded .carousel .products-container'), 0, {x:-(852 * _itemID)});
		}});

		$('.expanded .carousel .infos .btnDetails').removeClass('active');
		TweenMax.to('.expanded .carousel .infos', 0.25, {css:{bottom:-108}});
	}
	
	function setCarouselVideo(init)
	{
		$('.expanded .buttons a').removeClass('active');
		if(_productID > 0){
			$('.expanded .buttons .btnProducts').addClass('active');
			$('.expanded .arrows').show();
			$('.expanded .video').empty();
		} else {
			$('.expanded .buttons .btnVideo').addClass('active');
			$('.expanded .arrows').hide();
			$('.expanded .video').empty().html(
				'<div style="display:none"></div>'+
				'<object id="myExperience" class="BrightcoveExperience">'+
					'<param name="bgcolor" value="#000000" />'+
					'<param name="width" value="852" />'+
					'<param name="height" value="462" />'+
					'<param name="playerID" value="1719536881001" />'+
					'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDi_PE120JWsev9MDwmlXCJp" />'+
					'<param name="isVid" value="true" />'+
					'<param name="isUI" value="true" />'+
					'<param name="dynamicStreaming" value="true" />'+
					'<param name="autoStart" value="true" />'+
					'<param name="includeAPI" value="true" />'+
					'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
					'<param name="templateReadyHandler" value="onTemplateReady" />'+
					'<param name="@videoPlayer" value="2766600003001" />'+
				'</object>'+
				'<script type="text/javascript">brightcove.createExperiences();</script>'
			);
		}
		
		TweenMax.to('.expanded .vc-holder .vc-contents', init ? 0 : 0.5, {y:-(462 * _productID)});
	}
	
	function setContents()
	{
		setLanding();
		setNavigation(true);
		setCarouselVideo(true);
		TweenMax.to($('.expanded .carousel .products-container'), 0, {x:-852});
	}
	
})(jQuery, window);
