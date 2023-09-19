/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	var _reset = false;
	var onTemplateLoaded, onTemplateReady, player, modVP; 
	
	$(init);
	function init()
	{
		setAnimation();
		_timeline.play();
		
		// mouse events
		$('.btnwatch').click(function(){
			$('.blocklogo, .btnwatch').fadeOut(function(){
				ADTECH.event('Watch Now');
				$('.videoContainer').show();
				getVideo();
			});
		});
	}
	
	function setAnimation()
	{
		_timeline.add(TweenMax.from('#contents', _normDuration, {css:{'opacity':0}, delay:_fastDuration, onComplete:setCupid}));
		_timeline.add(TweenMax.from('.cupid', _normDuration, {css:{'top':250}, ease:Back.easeOut}));
		_timeline.add(TweenMax.from('.copy1', _normDuration, {css:{'left':250, 'opacity':0}}));
		_timeline.add(TweenMax.from('.copy2', _fastDuration, {css:{'left':250, 'opacity':0}}));
		_timeline.add(TweenMax.from('.copy3', _fastDuration, {css:{'left':250, 'opacity':0}}));
		_timeline.add(TweenMax.from('.copyright', _fastDuration, {css:{'top':250, 'opacity':0}}));
		_timeline.add(TweenMax.from('.logo', _normDuration, {top:-250, opacity:0, scaleX:0, scaleY:0}));
		_timeline.add(TweenMax.from('.btnwatch', _fastDuration, {opacity:0, scaleX:0}));
	}
	
	function setCupid()
	{
		TweenMax.to('.cupid', _normDuration, {rotation:1.5, delay:1.5});
		TweenMax.to('.cupid', _normDuration, {rotation:0, delay:2,onComplete:setCupid});
	}
	
	function getVideo()
	{
		$('.videoContainer .video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience" class="BrightcoveExperience">'+
				'<param name="wmode" value="transparent" />'+
				'<param name="width" value="340" />'+
				'<param name="height" value="190" />'+
				'<param name="playerID" value="1309896878001" />'+
				'<param name="playerKey" value="AQ~~,AAABMJhs0DE~,tyhXkY_sqh7mACS_sF4HzLw6V0D5iaKC" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="3202512920001" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
	}

})(jQuery, window);

