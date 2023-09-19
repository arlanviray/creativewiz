/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _reset = false;
	var _init = true;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	var _videos = [3477957942001, 3477915488001, 3477915486001, 3477957939001];
	var _videoId = 1;
	var _videoTotal;
	var _videoClicked = false;
	
	$(init);
	function init()
	{
		_videoTotal = _videos.length;
		setColContents();
		setColVideos();
		getCarousel();
		
		_init = false;
	}
	
	function setColContents(){
		var videoId;
		if(_init){
			videoId = _videoId - 1;
		} else {
			videoId = _videoId;
		}
		
		var cnt = $('.col1 .rcontents .carousel li').eq(videoId).find('.txt').length;
		$.each($('.col1 .rcontents .carousel li').eq(videoId).find('.txt'), function(i, obj){
			cnt--;
			TweenMax.from($('.col1 .rcontents .carousel li').eq(videoId).find('.txt'+ (cnt + 1)), _fastDuration, {css:{'opacity':0, 'top':0}, delay:(i + 1)/2});
		});
		
		if(_videoId == 1){
			var owhite = $('.col1 .rcontents .carousel li').eq(videoId).find('.owhite');
			owhite.css({'left':0});
			TweenMax.to(owhite, 1, {css:{'left':200}, delay:2});
		} else {
			TweenMax.from($('.col1 .rcontents .carousel li').eq(videoId).find('.buynow'), 0.5, {css:{'top':250}, delay:2});
		}
	}
	
	function setColVideos()
	{
		TweenMax.to($('.col2 .box img'), 0, {scale:0.5});
		$('.col2 .box .obtn').hover(
			function(){
				if(!_videoClicked){
					var img = $(this).parent().find('img');
					$(img).removeClass('active').addClass('active');
					TweenMax.to($(img), _fastDuration, {scale:0.55});
					
					var icon = $(this).parent().find('.icon');
					TweenMax.to($(icon), 0.35, {css:{'bottom':-50}, onComplete:function(){
						$(icon).removeClass('active').addClass('active');
						TweenMax.to($(icon), _fastDuration, {css:{'bottom':10}});
					}});	
				}
			},
			function(){
				if(!_videoClicked){
					var img = $(this).parent().find('img');
					$(img).removeClass('active');
					TweenMax.to($(img), _fastDuration, {scale:0.5});
					
					var icon = $(this).parent().find('.icon');
					TweenMax.to($(icon), 0.15, {css:{'bottom':-50}, onComplete:function(){
						$(icon).removeClass('active');
						TweenMax.to($(icon), 0.15, {css:{'bottom':10}});
					}});
				}
			}
		).click(function(){
			_videoId = $(this).parent().index() + 1;
			
			$(this).parent().css({'z-index':1});
			TweenMax.to($(this).parent(), _fastDuration, {css:{'width':444, 'height':250}, onComplete:function(){
				TweenMax.delayedCall(_normDuration, function(){
					getCarousel();
					$('.col2 .box').hide();
					$('.video, .arrow, .abullets').show();
					_videoClicked = true;
				});				
			}});
			
			TweenMax.to($(this).parent().find('img'), _fastDuration, {scale:1});
			$(this).parent().find('.icon').hide();
		});
	}
	
	function getCarousel()
	{
		if(_init){
			TweenMax.to($('.col1 .rcontents .rows'), 0, {css:{'top':-250}});
			
			$('.col1 .rcontents .carousel ul li').eq(0).clone().appendTo('.col1 .rcontents .carousel ul');
			$('.col1 .rcontents .carousel ul li').eq(_videoTotal - 1).clone().prependTo('.col1 .rcontents .carousel ul');
			$('.col1 .rcontents .carousel ul').append('<div class="clr"></div>');
			var list = '';
			for(var i = 1; i <= _videoTotal; i++){
				list += '<li></li>';
			}
			$('.col1 .rcontents .abullets').append('<ul>'+ list +'<div class="clr"></div></ul>');
			$('.col1 .rcontents .abullets ul').width($('.col1 .rcontents .abullets li').width() * _videoTotal);
			$.each($('.col1 .rcontents .abullets li'), function(index, obj){
				$(obj).click(function(){
					if(!TweenMax.isTweening($('.col1 .rcontents .carousel ul'))){
						if(_videoId == $(this).index() + 1) 
							return false;
						_videoId = $(this).index() + 1;
						setCarousel();
					}
				});
			});
		}
		
		$('.col1 .rcontents .aleft').click(function(){
			if(!TweenMax.isTweening($('.col1 .rcontents .carousel ul'))){
				if(_videoId > 0){
					_videoId--;
				}
				setCarousel();
			}
		});
		
		$('.col1 .rcontents .aright').click(function(){
			if(!TweenMax.isTweening($('.col1 .rcontents .carousel ul'))){
				if(_videoId < _videoTotal + 1){
					_videoId++;
				}
				setCarousel();
			}
		});
		
		setCarousel();
	}
	
	function setCarousel()
	{
		TweenMax.to($('.col1 .rcontents .carousel ul'), (_videoClicked ? _normDuration : 0), {css:{'left':-(526 * _videoId)}, onComplete:function(){
			if(_videoId == 0){
				_videoId = _videoTotal;
			}
			if(_videoId == _videoTotal + 1){
				_videoId = 1;
			}
			
			TweenMax.to($('.col1 .rcontents .carousel ul'), 0, {css:{'left':-(526 * _videoId)}});
			
			// bullets
			$('.col1 .rcontents .abullets li').removeClass('active');
			$('.col1 .rcontents .abullets li').eq(_videoId - 1).addClass('active');
			
			getVideo();
		}});
	}
	
	function getVideo()
	{
		$('.col2 .video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience" class="BrightcoveExperience">'+
				'<param name="bgcolor" value="#000000" />'+
				'<param name="width" value="444" />'+
				'<param name="height" value="250" />'+
				'<param name="playerID" value="3476534545001" />'+
				'<param name="playerKey" value="AQ~~,AAACAC_z5qk~,h37CFqh6b2d1DsuZgyZjn9qd0vmWxlJP" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="'+ _videos[_videoId - 1] +'" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
		
		switch(_videoId){
			case 1:
				ADTECH.event('Video viewed - Caroline Barnes');
				break;
			case 2:
				ADTECH.event('Video viewed - Mascara');
				break;
			case 3:
				ADTECH.event('Video viewed - Primer');
				break;
			case 4:
				ADTECH.event('Video viewed - Lip');
				break;
		}
	}

})(jQuery, window);

