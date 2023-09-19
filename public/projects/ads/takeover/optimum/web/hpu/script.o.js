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
		onComplete:function(){
			_timeline.restart();
		}
	});
	
	$(init);
	function init()
	{
		animateText();
	}
	
	function animateText()
	{
		for(var i=1; i<=2; i++){
			_timeline.from('.gp'+ i +'.txt1', _normDuration, {css:{opacity:0, left:-300}});
			_timeline.from('.gp'+ i +'.txt2', _normDuration, {css:{opacity:0, left:300}});
			_timeline.from('.gp'+ i +'.txt3', _normDuration, {css:{opacity:0, top:524}});
			_timeline.from('.gp'+ i, _normDuration, {css:{opacity:1}, delay:2});
		}
		_timeline.play();
	}

})(jQuery, window);

