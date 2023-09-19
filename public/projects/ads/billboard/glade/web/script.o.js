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
	var _delay = 2;
	var _loop = 0;
	
	$(init);
	function init()
	{
		//TweenMax.from($('.logo'), 2, {css:{y:-100}, ease:Bounce.easeOut});
		animFrame1();
	}
	
	function animFrame1()
	{
		TweenMax.to($('.frame1 .txt1'), _normDuration, {css:{'opacity':1}});
		TweenMax.from($('.frame1 .txt1'), _normDuration, {css:{'left':-184}});
		TweenMax.to($('.frame1 .txt2'), _normDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame1 .txt2'), _normDuration, {css:{'left':-184}, delay:_fastDuration, onComplete:function(){
			TweenMax.delayedCall(_delay, function(){
				TweenMax.to($('.frame1 .txt1'), _fastDuration, {css:{'opacity':0, 'top':290}, delay:_fastDuration});
				TweenMax.to($('.frame1 .txt2'), _fastDuration, {css:{'opacity':0, 'top':290}, onComplete:animFrame2});
			});
		}});
	}
	
	function animFrame2()
	{
		TweenMax.to($('.backg .bg2'), _normDuration, {css:{'opacity':1}});
		TweenMax.to($('.frame2 .item3'), _normDuration, {css:{'opacity':1}});
		TweenMax.from($('.frame2 .item3'), _normDuration, {css:{'left':970}});
		TweenMax.to($('.frame2 .item1'), 8, {css:{rotation:360}, repeat:-1, ease:Linear.easeNone});
		TweenMax.to($('.frame2 .item1'), _fastDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame2 .item1'), _fastDuration, {css:{scaleX:0.5, scaleY:0.5}, delay:_fastDuration});
		TweenMax.to($('.frame2 .item2'), 8, {css:{rotation:-360}, repeat:-1, ease:Linear.easeNone});
		TweenMax.to($('.frame2 .item2'), _fastDuration, {css:{'opacity':1}, delay:_normDuration});
		TweenMax.from($('.frame2 .item2'), _fastDuration, {css:{scaleX:0.5, scaleY:0.5}, delay:_normDuration});
		TweenMax.to($('.frame2 .txt1'), _normDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame2 .txt1'), _normDuration, {css:{'left':-184}, delay:_fastDuration});
		TweenMax.to($('.frame2 .txt2'), _normDuration, {css:{'opacity':1}, delay:_normDuration});
		TweenMax.from($('.frame2 .txt2'), _normDuration, {css:{'left':-184}, delay:_normDuration, onComplete:function(){
			TweenMax.delayedCall(_delay, function(){
				TweenMax.to($('.frame2'), _fastDuration, {css:{'opacity':0, 'top':-350}});
				animFrame3();
			});
		}});
	}
	
	function animFrame3()
	{
		TweenMax.to($('.backg .bg3, .backg .overlay'), _normDuration, {css:{'opacity':1}});
		TweenMax.from($('.backg .overlay'), _normDuration, {css:{'top':250}});
		TweenMax.to($('.frame3 .item1'), 8, {css:{rotation:360}, repeat:-1, ease:Linear.easeNone});
		TweenMax.to($('.frame3 .item1'), _fastDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame3 .item1'), _fastDuration, {css:{'top':300}, delay:_fastDuration});
		TweenMax.to($('.frame3 .item3'), 8, {css:{rotation:360}, repeat:-1, ease:Linear.easeNone});
		TweenMax.to($('.frame3 .item3'), _fastDuration, {css:{'opacity':1}, delay:_normDuration});
		TweenMax.from($('.frame3 .item3'), _fastDuration, {css:{'top':300}, delay:_normDuration});
		TweenMax.to($('.frame3 .item4'), _fastDuration, {css:{'opacity':1}, delay:0.75});
		TweenMax.from($('.frame3 .item4'), _fastDuration, {css:{'top':300}, delay:0.75});
		TweenMax.to($('.frame3 .txt1'), _fastDuration, {css:{'opacity':1}, delay:0.75});
		TweenMax.from($('.frame3 .txt1'), _fastDuration, {css:{'left':500}, delay:0.75});
		TweenMax.to($('.frame3 .txt2'), _fastDuration, {css:{'opacity':1}, delay:1});
		TweenMax.from($('.frame3 .txt2'), _fastDuration, {css:{'left':500}, delay:1, onComplete:function(){
			TweenMax.delayedCall(_delay, function(){
				TweenMax.to($('.frame3'), _fastDuration, {css:{'opacity':0, 'left':1000}});
				animFrame4();
			});
		}});
	}
	
	function animFrame4()
	{
		TweenMax.to($('.backg .bg4'), _normDuration, {css:{'opacity':1}});
		TweenMax.to($('.frame4 .txt1'), _normDuration, {css:{'opacity':1}});
		TweenMax.from($('.frame4 .txt1'), _normDuration, {css:{rotation:360, scaleX:0.25, scaleY:0.25}});
		TweenMax.to($('.frame4 .txt2'), _normDuration, {css:{'opacity':1}, delay:0.5});
		TweenMax.from($('.frame4 .txt2'), _normDuration, {css:{rotation:360, scaleX:0.25, scaleY:0.25}, delay:0.5});
		TweenMax.to($('.frame4 .txt3'), _normDuration, {css:{'opacity':1}, delay:1});
		TweenMax.from($('.frame4 .txt3'), _normDuration, {css:{rotation:360, scaleX:0.25, scaleY:0.25}, delay:1, onComplete:function(){
			TweenMax.delayedCall(_delay, function(){
				TweenMax.to($('.backg .overlay'), _normDuration, {css:{'top':250}});
				TweenMax.to($('.frame4 .txt1'), _fastDuration, {css:{'opacity':0, scaleX:1.5, scaleY:1.5}});
				TweenMax.to($('.frame4 .txt2'), _fastDuration, {css:{'opacity':0, scaleX:1.5, scaleY:1.5}, delay:_fastDuration, onComplete:animFrame5});
				TweenMax.to($('.frame4 .txt3'), _fastDuration, {css:{'opacity':0, scaleX:1.5, scaleY:1.5}, delay:_normDuration, onComplete:function(){
					TweenMax.to($('.frame4 .txt1, .frame4 .txt2, .frame4 .txt3'), 0, {css:{scaleX:1, scaleY:1}});
				}});
			});
		}});
	}
	
	function animFrame5()
	{
		TweenMax.to($('.backg .bg5'), _normDuration, {css:{'opacity':1}});
		TweenMax.to($('.frame5 .txt1'), _fastDuration, {css:{'opacity':1}, delay:_normDuration});
		TweenMax.from($('.frame5 .txt1'), _fastDuration, {css:{'top':-60}, delay:_normDuration});
		TweenMax.to($('.frame5 .txt2'), _fastDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame5 .txt2'), _fastDuration, {css:{'top':-60}, delay:_fastDuration});
		TweenMax.to($('.frame5 .txt3'), _fastDuration, {css:{'opacity':1}});
		TweenMax.from($('.frame5 .txt3'), _fastDuration, {css:{'top':-60}});
		TweenMax.to($('.frame5 .cta'), _fastDuration, {css:{'opacity':1}});
		TweenMax.from($('.frame5 .cta'), _fastDuration, {css:{'top':260}});
		TweenMax.to($('.frame5 .items'), _fastDuration, {css:{'opacity':1}, delay:_fastDuration});
		TweenMax.from($('.frame5 .items'), _fastDuration, {css:{'top':970}, delay:_fastDuration});
		TweenMax.to($('.frame5 .logo'), _normDuration, {css:{'opacity':1}, delay:1});
		TweenMax.from($('.frame5 .logo'), _normDuration, {css:{scaleX:0.25, scaleY:0.25}, delay:1});
		if(_loop <= 5){
			animReset();
			TweenMax.delayedCall(4, function(){
				TweenMax.to($('.backg .bg5'), _normDuration, {css:{'opacity':0}});
				TweenMax.to($('.frame5'), _fastDuration, {css:{'opacity':0, 'top':250}, onComplete:function(){
					$('.frame5').removeAttr('style');
					$('.frame5 img').css({'opacity':0});
				}});
				animFrame1();
			});
		}
		_loop++;
	}
	
	function animReset()
	{
		$('.frame1 .txt1, .frame1 .txt2').removeAttr('style');
		$('.frame1 .txt1').css({'top':parseInt($('.frame1 .txt1').css('top').replace('px', '')), 'left':parseInt($('.frame1 .txt1').css('left').replace('px', ''))});
		$('.frame1 .txt2').css({'top':parseInt($('.frame1 .txt2').css('top').replace('px', '')), 'left':parseInt($('.frame1 .txt2').css('left').replace('px', ''))});
		
		$('.frame2').removeAttr('style');
		$('.frame2 img').css({'opacity':0});
		
		$('.frame3').removeAttr('style');
		$('.frame3 img').css({'opacity':0});
		
		$('.backg .bg2, .backg .bg3, .backg .bg4').css({'opacity':0});
		$('.backg .overlay').removeAttr('style');
	}

})(jQuery, window);

