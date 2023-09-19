/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _reset = false;
	var _idpic = 2;
	var _idcopy = 0;
	var _counter = 0;
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
		$('.pics img').not(':eq(0)').css({'opacity':0});
		animateImages();
	}
	
	function animateImages()
	{
		if(_idpic <= $('.pics .pic').length){
			TweenMax.to($('.pics .pic'+ _idpic), 0, {css:{'opacity':1}, delay:_fastDuration, onComplete:function(){
				_idpic++;
				_counter++;
				if(_counter == (_reset ? 6 : 5)){
					_reset = true;
					_counter = 0;
					animateCopies();
				} else {
					animateImages();
				}
			}});
		} else {
			$('.pics img').not(':eq(0)').not(':eq(10)').css({'opacity':0});
			TweenMax.to($('.pics .pic12'), 0, {css:{'opacity':0}, delay:_fastDuration, onComplete:function(){
				_reset = false;
				_idpic = 2;
				animateImages();
			}});
		}
	}
	
	function animateCopies()
	{
		_idcopy = _idcopy == 2 ? 1 : (_idcopy + 1);
		TweenMax.to($('.overlay'), _fastDuration, {css:{'opacity':0.8}, delay:_normDuration});
		TweenMax.to($('.copies .copy'+ _idcopy), _normDuration, {css:{'opacity':1}, delay:1});
		TweenMax.to($('.copies .copy'+ _idcopy), _normDuration, {css:{'opacity':0}, delay:5, onComplete:function(){
			TweenMax.to($('.overlay'), _fastDuration, {css:{'opacity':0}});
			animateImages();
		}});
	}

})(jQuery, window);

