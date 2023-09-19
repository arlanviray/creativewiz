/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	var _reset = false;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':false, 
		onReverseComplete:function(){
			TweenMax.delayedCall(1, function(){
				_timeline.play();
			});
		}, 
		onComplete:function(){
			TweenMax.delayedCall(5, function(){
				_timeline.reverse();
			});
		}
	});
	
	$(init);
	function init()
	{
		_timeline.from('.txt1', _normDuration, {opacity:0, left:'-=100'});
		_timeline.from('.txt2', _normDuration, {opacity:0, left:'-=100'});
		_timeline.from('.txt3', _normDuration, {opacity:0, left:'-=100'});
		_timeline.from('.txt4', _normDuration, {opacity:0, left:'-=100'});
		_timeline.from('.txt5', _normDuration, {opacity:0, left:'-=100'});
		_timeline.from('.cta', _normDuration, {opacity:0, top:'+=40'});
	}

})(jQuery, window);

