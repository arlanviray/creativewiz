/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _itemID = 1;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:timelinePlay, 
		onComplete:timelineReverse
	});
	var _reset = false;
	
	$(init);
	function init()
	{
		setAnimation();
		timelinePlay();
		photographersHide();
		for(var i = 1; i <= 10; i++){
    		flash($('.flash'+ i));
		}
		
		// mouse events
		$('#contents').click(function(){
			ADTECH.click('STYLE AWARDS 2014');
		});
	}
	
	function setAnimation()
	{
		TweenMax.to('.photographers', 0, {scaleX:0.7, scaleY:0.7})
		
		_timeline.add(TweenMax.to('.box2', _normDuration, {css:{'width':728}}));
		_timeline.add(TweenMax.from('.copy1', _normDuration, {css:{'top':-90}, ease:Bounce.easeOut}));
		_timeline.add(TweenMax.to('.copy1', _normDuration, {css:{'top':90}, delay:2}));
		_timeline.add(TweenMax.from('.copy2', _normDuration, {css:{'top':-90}, ease:Bounce.easeOut}));
	}
	
	function timelinePlay()
	{
		if(_itemID < 2){
			_itemID++;
		} else {
			_itemID = 1;
		}
		$('.polaroid').hide();
		$('.polaroid'+ _itemID).show();
		
		TweenMax.to('.photographers', 2, {autoAlpha:1});
		TweenMax.delayedCall(0.5, function(){
			TweenMax.to('.photographers', 3, {css:{'left':_itemID == 1 ? -144 : -280}, ease:Linear.easeNone, onComplete:function(){
				_timeline.play();
				photographersHide();
			}});
		});
	}
	
	function photographersHide()
	{
		TweenMax.to('.photographers', 0, {autoAlpha:0});
	}
	
	function timelineReverse()
	{
		TweenMax.delayedCall(4, function(){
			_timeline.reverse();
		});
	}
	
	function flash(elem)
	{
		TweenMax.from(elem, _fastDuration, {opacity:0, scaleX:0.5, scaleY:0.5, delay:randomNumber(0.5, 1.5), ease:Bounce.easeOut, onComplete:flash, onCompleteParams:[elem]});
	}
	
	function randomNumber(min, max)
	{
		var val = Math.floor(Math.random() * (1 + max - min) + min);
		return val;
	}

})(jQuery, window);

