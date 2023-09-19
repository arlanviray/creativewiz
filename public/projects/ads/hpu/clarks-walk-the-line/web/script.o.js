/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _reset = false;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:function(){
			$('.btnVideo').show();
		}, 
		onComplete:function(){
			$('.btnClose').show();
			$('.videoContainer').show();
			TweenMax.delayedCall(_normDuration, getVideo);
		}
	});
	var _yposbtnGetthelook;
	var _valbtnGetthelook;
	
	$(init);
	function init()
	{
		setExpand();
		_yposbtnGetthelook = $('.btnContainer').css('top');
		_valbtnGetthelook = $('.btnContainer a').html();
		
		// mouse events
		$('.btnVideo').click(adtechExpand);
		
		$('.btnClose').hover(
			function(){
				TweenMax.to($(this).find('img'), _fastDuration, {rotation:90});
			},
			function(){
				TweenMax.to($(this).find('img'), _fastDuration, {rotation:0});
			}
		).click(function(){
			adtechContract();
		});
	}
	
	function adtechExpand()
	{
		ADTECH.expand();
		_reset = true;
		_timeline.play();
		setEvents();
	}
	
	function adtechContract()
	{
		ADTECH.contract();
		_reset = false;
		_timeline.reverse();
		setEvents();
	}
	
	function setExpand()
	{
		_timeline.add(TweenMax.to('#contents', _normDuration, {css:{'width':600}}));
		_timeline.insert(TweenMax.to(['.picContainer .pic1', '.picContainer .pic2'], _fastDuration, {css:{'width':200}}));
		//_timeline.add(TweenMax.to('.picContainer', _fastDuration, {css:{'opacity':0}}));
	}
	
	function setEvents()
	{
		if(_reset){
			$('.btnVideo').hide();
		} else {
			$('.btnClose').hide();
			$('.videoContainer').hide();
			$('.videoContainer .video').empty();
			//TweenMax.to('.picContainer', _fastDuration, {css:{'opacity':1}});
		}
		
		TweenMax.to('.btnContainer', _fastDuration, {css:{'top':620}, onComplete:function(){
			var thisvalue;
			if(_reset){
				thisvalue = 'GET THE LOOK';
			} else {
				thisvalue = _valbtnGetthelook;
			}
			$('.btnContainer a').html(thisvalue);
			TweenMax.to('.btnContainer', _normDuration, {css:{'top':_yposbtnGetthelook}});
			TweenMax.to('.btnContainer .btnGetthelook', 0.75, {css:{'width':_reset ? 140 : 180}});
		}});
	}
	
	function getVideo()
	{
		$('.videoContainer .video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience" class="BrightcoveExperience">'+
				//'<param name="bgcolor" value="#000000" />'+
				'<param name="wmode" value="transparent" />'+
				'<param name="width" value="600" />'+
				'<param name="height" value="339" />'+
				'<param name="playerID" value="1174938201001" />'+
				'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDjMpoBoiFF9EF1-FPk0PWET" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="3113085508001" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
	}

})(jQuery, window);

