/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var onTemplateLoaded, onTemplateReady, player, modVP, modExp, modCon;
var videos = [3385119469001, 3385118963001, 3385125622001, 3385119470001, 3385118965001, 3385119472001, 3385118966001, 3385125624001, 3385119474001, 3385118967001, 3385499304001];
var videoId = 0;

function onTemplateLoaded(experienceID)
{
	player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
}

function onTemplateReady(evt) 
{
	modVP.loadVideoByID(videos[videoId]);
    modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaBegin);
    modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaComplete);
}

function onMediaBegin(evt){
	setBullets();
}

function onMediaComplete(evt)
{
	videoId++;
	if(videoId == videos.length){
		videoId = 0;
	}
	modVP.loadVideoByID(videos[videoId]);
	setBullets();
}

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

init();
function init()
{
	// mouse events
	$('.aleft').click(function(){
		videoId--;
		if(videoId == -1){
			videoId = videos.length - 1;
		}
		modVP.loadVideoByID(videos[videoId]);
		setBullets();
	});
	$('.aright').click(onMediaComplete);
	
	var list = '';
	$.each(videos, function(i, obj){
		list += '<li></li>';
	});
	$('.bullets').empty().html('<ul>'+ list +'<div class="clear-fix"></div></ul>');
	$('.bullets li').click(function(){
		videoId = $(this).index();
		modVP.loadVideoByID(videos[videoId]);
	});	
}

function setBullets()
{
	$('.bullets li').removeClass('active').eq(videoId).addClass('active');
	switch(videoId){
		case 0:
			ADTECH.event('View Video - Dry pets fur');
			break;
		case 1:
			ADTECH.event('View Video - Dry and polish precious wine glasses');
			break;
		case 2:
			ADTECH.event('View Video - Clean inside a flute');
			break;
		case 3:
			ADTECH.event('View Video - Keep silk clothes on clothes hangers');
			break;
		case 4:
			ADTECH.event('View Video - Buff jewellery');
			break;
		case 5:
			ADTECH.event('View Video - Line bins to stop leakages');
			break;
		case 6:
			ADTECH.event('View Video - Clean floors');
			break;
		case 7:
			ADTECH.event('View Video - Separate toes when painting nails');
			break;
		case 8:
			ADTECH.event('View Video - Make towels and airing cupboards smell nice');
			break;
		case 9:
			ADTECH.event('View Video - Filter leftover coffee grounds');
			break;
		case 10:
			ADTECH.event('View Video - Separate pancakes');
			break;
	}
}

