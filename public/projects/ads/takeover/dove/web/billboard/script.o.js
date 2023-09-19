/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPod/i);
		},
		iPad: function() {
			return navigator.userAgent.match(/iPad/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		noneIOS: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows());
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.iPad() || isMobile.Opera() || isMobile.Windows());
		}
	};
	var _reset = false;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':false, 
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	
	$(init);
	function init()
	{
		_timeline.from('.txt1', _normDuration, {opacity:0, left:'+=100', delay:1});
		_timeline.from('.txt2', _normDuration, {opacity:0, left:'+=100'});
		_timeline.from('.txt3', _normDuration, {opacity:0, left:'+=100'});
		_timeline.from('.txt4', _normDuration, {opacity:0, left:'+=100'});
		_timeline.from('.cta', _normDuration, {opacity:0, top:'+=100'});
		$('.volume').click(function(){
			if($(this).hasClass('inactive')){
				$(this).removeClass('inactive');
				BCL.videoPlayer.setVolume(1);
			} else {
				$(this).addClass('inactive');
				BCL.videoPlayer.setVolume(0);
			}
		});
		if(isMobile.any()){
			$('.volume').hide();
		}
		if(isMobile.noneIOS()){
			$('.videoholder .video').addClass('android');
		}
	}

})(jQuery, window);

