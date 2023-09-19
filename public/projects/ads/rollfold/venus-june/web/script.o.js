/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){

	var _normDuration = 0.5;
  	var _fastDuration = 0.25;
	var _thisTimeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:adtechContract, 
		onComplete:setBtnClose,
		onCompleteParams:[true]
	});
	var _sliderProductId = 1;
  	var _sliderProductTotal;
  	var _videoID;
  	var _videoIDArray = {
		"player": {
			id: "3476534544001",
			key: "AQ~~,AAAAAFP6XPs~,Oe0BRn-9H59KH6aPsbHFj6BuZc_T2dme",
		},
		"data": [
			{
				videoId: "3613707375001",
				title: "<span class=\"italic\">Vacation</span> LOOKS",
			},
			{
				videoId: "3613760415001",
				title: "<span class=\"italic\">Walk</span> TALLER",
			}
		]
	}
	
	$(init);
	function init()
	{
		revealImage();
    	_sliderProductTotal = $('.sliderProduct ul > li').size();
    	$('.sliderProduct ul li').eq(0).clone().appendTo('.sliderProduct ul');
    	$('.sliderProduct ul li').eq(_sliderProductTotal - 1).clone().prependTo('.sliderProduct ul').parent().append('<div class="clr"></div>');
    	$('.sliderProduct .left, .sliderProduct .right').click(function(){
			if(!TweenMax.isTweening($('.sliderProduct ul'))){
				if($(this).hasClass('left')){
					ADTECH.event('SliederProduct clicked arrow left');
					if(_sliderProductId > 0){
						_sliderProductId--;
					}
				} else {
					ADTECH.event('SliederProduct clicked arrow right');
					if(_sliderProductId < _sliderProductTotal + 1){
						_sliderProductId++;
					}
				}
				getSliderProduct();
			}
		});
    
		$('.unfold1').click(function(){
			ADTECH.expand();
			_thisTimeline.play();
		});
		$('#btnOverlay').click(function(){});
		$('#btnClose').click(function(){
			_thisTimeline.reverse();
			setBtnClose();
		});
		
		setTimeout(function(){
			// $('.unfold1').click();
			// TweenMax.delayedCall(4, function(){$('#btnClose').click()});
			$('.contents, .cutout, #btnOverlay, #btnClose').css({'opacity':1});
		}, 1000);
		
		$('a.video').click(function(){
			if($(this).hasClass('video1')){
				ADTECH.event('Watched video1');
				$('.overlay .content h2').html(_videoIDArray.data[0].title);
				_videoID = 1;
			} else {
				ADTECH.event('Watched video2');
				$('.overlay .content h2').html(_videoIDArray.data[1].title);
				_videoID = 2;
			}
			getVideo();
		});
		
		$('.btnCloseVideo').click(function(){
			$(this).hide();
			$('.overlay').hide();
			$('.overlay .content').removeAttr('style');
			$('.videoContainer .video').empty();
		});
	}
	
	function revealImage()
	{
		if(navigator.appVersion.indexOf('MSIE 10.') != -1 || navigator.appVersion.indexOf('MSIE 9.') != -1){
			for(var i = 1; i <= 6; i++){ 
				if(i > 1){
					$('.column'+ i).detach().appendTo('.unfold'+ i +' .front');
				}
			}
			$('.initial').css({'z-index':5});
			$('.unfold1').css({'z-index':6});
			$('.unfold2').css({'z-index':4, 'left':600});
			$('.unfold3').css({'z-index':3, 'left':300});
			$('.unfold4').css({'z-index':2, 'top':0});
			$('.unfold5').css({'z-index':1, 'left':0});
			$('.unfold6').css({'z-index':0, 'left':300});
			
			_thisTimeline.to($('.unfold1'), _fastDuration, {autoAlpha:0, ease:Linear.easeOut});
			_thisTimeline.to($('.unfold2'), _fastDuration, {css:{'left':300}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold2'), 0, {css:{'display':'block'}}));
			_thisTimeline.to($('.unfold3'), _fastDuration, {css:{'left':0}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold3'), 0, {delay:0.5, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold4'), _fastDuration, {css:{'top':600}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold4'), 0, {delay:0.75, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold5'), _fastDuration, {css:{'left':300}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold5'), 0, {delay:1, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold6'), _fastDuration, {css:{'left':600}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold6'), 0, {delay:1.25, css:{'display':'block'}}));
			
		} else {
		
			CSSPlugin.defaultTransformPerspective = 2000;
			TweenMax.set($('.unfold1 .back, .unfold2 .back, .unfold4 .back, .unfold5 .back'), {scaleX:-1});
			TweenMax.set($('.unfold3 .back'), {scaleY:-1});
			
			_thisTimeline.to($('.unfold1'), _normDuration, {rotationY:-180, transformOrigin:'0% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold1 .front'), 0, {delay:0.25, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold2'), _normDuration, {rotationY:-180, transformOrigin:'0% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold2'), 0, {delay:0.5, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold2 .front'), 0, {delay:0.75, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold3'), _normDuration, {rotationX:-180, transformOrigin:'0% 100%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold3'), 0, {delay:1, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold3 .front'), 0, {delay:1.25, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold4'), _normDuration, {rotationY:180, transformOrigin:'100% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold4'), 0, {delay:1.5, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold4 .front'), 0, {delay:1.75, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold5'), _normDuration, {rotationY:180, transformOrigin:'100% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold5'), 0, {delay:2, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold5 .front'), 0, {delay:2.25, autoAlpha:0}));
			
		}
	}
	
	function getSliderProduct()
	{
		var sliderWidth = $('.sliderProduct ul li').width();
		TweenMax.to('.sliderProduct ul li img', _normDuration, {css:{'opacity':0, scaleX:0.25, scaleY:0.25}});
		TweenMax.to($('.sliderProduct ul li').eq(_sliderProductId).find('img'), _normDuration, {css:{'opacity':1, scaleX:1, scaleY:1}});
		TweenMax.to('.sliderProduct ul', _normDuration, {css:{'left':-(sliderWidth * _sliderProductId)}, onComplete:function(){
			if(_sliderProductId == 0){
				_sliderProductId = _sliderProductTotal;
			}
			if(_sliderProductId == _sliderProductTotal + 1){
				_sliderProductId = 1;
			}
			TweenMax.to('.sliderProduct ul', 0, {css:{'left':-(sliderWidth * _sliderProductId)}});
			TweenMax.to($('.sliderProduct ul li').eq(_sliderProductId).find('img'), 0, {css:{'opacity':1, scaleX:1, scaleY:1}});
		}});
	}
	
	function getVideo()
	{
		$('.overlay').show();
		TweenMax.to('.overlay .content', _normDuration, {css:{'top':200}, onComplete:function(){
			$('.btnCloseVideo').show();
		}});
		$('.videoContainer .video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience'+ _videoIDArray.data[_videoID - 1].videoId +'" class="BrightcoveExperience">'+
				'<param name="wmode" value="transparent" />'+
				'<param name="width" value="652" />'+
				'<param name="height" value="392" />'+
				'<param name="playerID" value="'+ _videoIDArray.player.id +'" />'+
				'<param name="playerKey" value="'+ _videoIDArray.player.key +'" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="'+ _videoIDArray.data[_videoID - 1].videoId +'" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
	}
	
	function setBtnClose(show)
	{
		if(show){
			$('#btnOverlay, #btnClose').show();
		} else {
			$('#btnOverlay, #btnClose').hide();
		}
	}
	
	function adtechContract()
	{
		ADTECH.contract();
	}

})(jQuery, window);

