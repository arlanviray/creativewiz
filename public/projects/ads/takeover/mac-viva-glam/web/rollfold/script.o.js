/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){

	var _thisDuration = 0.5;
	var _thisTimeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:adtechContract, 
		onComplete:setBtnClose,
		onCompleteParams:[true]
	});
	var _thisIntervalID;
	
	$(init);
	function init()
	{
		revealImage();
		$('.unfold1').click(function(){
			ADTECH.expand();
			_thisTimeline.play();
		});
		$('#btnOverlay').click(function(){
			ADTECH.click('clickevent');
		});
		$('#btnClose').click(function(){
			_thisTimeline.reverse();
			setBtnClose();
		});
		
		_thisIntervalID = setInterval(function(){
			if($('#gatefold', window.parent.document).length < 1){
				$('.unfold1').click();
				clearInterval(_thisIntervalID);
			}
		}, 1000);
		/*
		setTimeout(function(){
			$('.unfold1').click();
			TweenMax.delayedCall(4, function(){$('#btnClose').click()});
		}, 1000);
		*/
	}
	
	function revealImage()
	{
		if(navigator.appVersion.indexOf('MSIE 10.') != -1 || navigator.appVersion.indexOf('MSIE 9.') != -1){
			
			$('.initial').css({'z-index':5});
			$('.unfold1').css({'z-index':6});
			$('.unfold2').css({'z-index':4, 'left':600});
			$('.unfold3').css({'z-index':3, 'left':300});
			$('.unfold4').css({'z-index':2, 'top':0});
			$('.unfold5').css({'z-index':1, 'left':0});
			$('.unfold6').css({'z-index':0, 'left':300});
			
			_thisDuration = 0.25;
			_thisTimeline.to($('.unfold1'), _thisDuration, {autoAlpha:0, ease:Linear.easeOut});
			_thisTimeline.to($('.unfold2'), _thisDuration, {css:{'left':300}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold2'), 0, {css:{'display':'block'}}));
			_thisTimeline.to($('.unfold3'), _thisDuration, {css:{'left':0}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold3'), 0, {delay:0.5, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold4'), _thisDuration, {css:{'top':600}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold4'), 0, {delay:0.75, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold5'), _thisDuration, {css:{'left':300}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold5'), 0, {delay:1, css:{'display':'block'}}));
			_thisTimeline.to($('.unfold6'), _thisDuration, {css:{'left':600}, ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold6'), 0, {delay:1.25, css:{'display':'block'}}));
			
		} else {
		
			CSSPlugin.defaultTransformPerspective = 2000;
			TweenMax.set($('.unfold1 .back, .unfold2 .back, .unfold4 .back, .unfold5 .back'), {scaleX:-1});
			TweenMax.set($('.unfold3 .back'), {scaleY:-1});
			
			_thisTimeline.to($('.unfold1'), _thisDuration, {rotationY:-180, transformOrigin:'0% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold1 .front'), 0, {delay:0.25, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold2'), _thisDuration, {rotationY:-180, transformOrigin:'0% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold2'), 0, {delay:0.5, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold2 .front'), 0, {delay:0.75, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold3'), _thisDuration, {rotationX:-180, transformOrigin:'0% 100%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold3'), 0, {delay:1, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold3 .front'), 0, {delay:1.25, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold4'), _thisDuration, {rotationY:180, transformOrigin:'100% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold4'), 0, {delay:1.5, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold4 .front'), 0, {delay:1.75, autoAlpha:0}));
			
			_thisTimeline.to($('.unfold5'), _thisDuration, {rotationY:180, transformOrigin:'100% 0%', ease:Linear.easeOut});
			_thisTimeline.insert(TweenMax.to($('.unfold5'), 0, {delay:2, css:{'display':'block'}}));
			_thisTimeline.insert(TweenMax.to($('.unfold5 .front'), 0, {delay:2.25, autoAlpha:0}));
			
		}
	}
	
	function setBtnClose(show)
	{
		if(show){
			$('#btnOverlay, #btnClose').show();
		} else {
			$('#btnOverlay, #btnClose').hide();
		}
	}
	
	function adtechContract()
	{
		ADTECH.contract();
	}

})(jQuery, window);

