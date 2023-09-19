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
		animateImages();
		animateCopies(1);
	}
	
	function animateImages()
	{
		var ypos = 700;
		TweenMax.to($('.pics .pic1'), 10, {css:{y:-ypos}, ease:Linear.easeNone});
		TweenMax.to($('.pics .pic1'), 2, {css:{'opacity':0}, delay:9.5});
		TweenMax.to($('.pics .pic2'), 10, {css:{y:-ypos}, delay:9.5, ease:Linear.easeNone});
		TweenMax.to($('.pics .pic2'), 2, {css:{'opacity':0}, delay:19.5});
		TweenMax.to($('.pics .pic3'), 10, {css:{y:-ypos}, delay:19.5, ease:Linear.easeNone, onComplete:function(){
			TweenMax.to($('.pics .pic1'), 2, {css:{'opacity':1}});
			TweenMax.to($('.pics .pic1'), 0, {css:{y:0}});
			animateImages();
		}});
		TweenMax.to($('.pics .pic3'), 2, {css:{'opacity':0}, delay:29.5, onComplete:function(){
			TweenMax.to($('.pics .pic2'), 0, {css:{'opacity':1, y:0}});
			TweenMax.to($('.pics .pic3'), 0, {css:{'opacity':1, y:0}});
		}});
	}
	
	function animateCopies(id)
	{
		TweenMax.to($('.copies .copy'+ id), _normDuration, {css:{'opacity':1}});
		TweenMax.to($('.copies .copy'+ id), _normDuration, {css:{'opacity':0}, delay:4, onComplete:animateCopies, onCompleteParams:[id == 2 ? 1 : (id + 1)]});
	}

})(jQuery, window);

