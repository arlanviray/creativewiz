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
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	
	$(init);
	function init()
	{
		TweenMax.set('.txt', {opacity:0});
		animChar();
	}
	
	function animChar()
	{
		TweenMax.to('.char .txt1', _fastDuration, {opacity:1, delay:0.5});
		TweenMax.to('.char .txt2', _fastDuration, {opacity:1, delay:1});
		TweenMax.to('.char .head', _fastDuration, {rotation:-10, delay:1.5});
		TweenMax.to('.char .head', _fastDuration, {rotation:0, delay:1.75});
		TweenMax.to('.char .head', _fastDuration, {rotation:-10, delay:2});
		TweenMax.to('.char .head', _fastDuration, {rotation:0, delay:2.25});
		TweenMax.to('.char .txt', _fastDuration, {opacity:0, delay:5, onComplete:animChar});
	}
	
})(jQuery, window);
