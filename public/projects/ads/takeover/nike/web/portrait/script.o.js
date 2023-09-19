/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){

	var _reset = false;
	var _init = true;
	var _thumbId = 0;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	
	$(init);
	function init()
	{
		setHeader();
		setMain();
		setThumbs();
		setArrow();
		
		_init = false;
	}
	
	function setHeader()
	{
		TweenMax.to($('.header img'), 0, {css:{'opacity':1}});
		TweenMax.from($('.header img.h1'), _normDuration, {css:{'top':-20, 'opacity':0}});
		TweenMax.from($('.header img.h2'), _normDuration, {delay:_normDuration, css:{'left':-20, 'opacity':0}, ease:Back.easeOut});
		TweenMax.from($('.header img.h3'), _normDuration, {delay:_normDuration, css:{'left':200, 'opacity':0}, ease:Back.easeOut});
		TweenMax.from($('.header img.h4'), _normDuration, {delay:1, css:{'top':150, 'opacity':0}});
		TweenMax.to($('.header img'), _normDuration, {delay:5, css:{'opacity':0}, onComplete:setHeader});
	}
	
	function setMain()
	{
		$('.thumbs img').removeClass('active').eq(_thumbId).addClass('active');
		if(_thumbId > 0){
			TweenMax.delayedCall(_normDuration, function(){
				$('.main .video').empty();
			});
		} else {
			TweenMax.delayedCall(_normDuration, function(){
				$('.main .video').empty().html(
					'<div style="display:none"></div>'+
					'<object id="myExperience" class="BrightcoveExperience">'+
						'<param name="bgcolor" value="#000000" />'+
						'<param name="width" value="270" />'+
						'<param name="height" value="345" />'+
						'<param name="playerID" value="1174938201001" />'+
						'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDjMpoBoiFF9EF1-FPk0PWET" />'+
						'<param name="isVid" value="true" />'+
						'<param name="isUI" value="true" />'+
						'<param name="dynamicStreaming" value="true" />'+
						'<param name="autoStart" value="true" />'+
						'<param name="includeAPI" value="true" />'+
						'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
						'<param name="templateReadyHandler" value="onTemplateReady" />'+
						'<param name="@videoPlayer" value="3466851706001" />'+
					'</object>'+
					'<script type="text/javascript">brightcove.createExperiences();</script>'
				);
			});
		}
		
		TweenMax.to('.main ul', _init ? 0 : _normDuration, {css:{'top':-(345 * _thumbId)}});
	}
	
	function setThumbs()
	{
		$.each($('.thumbs img'), function(i, obj){
			$(obj).click(function(){
				_thumbId = $(this).index();
				setMain();
			});
		});
	}
	
	function setArrow()
	{
		TweenMax.to('.button .arrow', _normDuration, {css:{'left':48}});
		TweenMax.to('.button .arrow', _normDuration, {css:{'left':44}, delay:_normDuration, onComplete:setArrow});
	}
	
})(jQuery, window);

