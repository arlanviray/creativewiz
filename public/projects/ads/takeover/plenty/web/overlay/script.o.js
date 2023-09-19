/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var onTemplateLoaded, onTemplateReady, player, modVP, modExp, modCon;

function onTemplateLoaded(experienceID)
{
	player = brightcove.api.getExperience(experienceID);
	modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
}

function onTemplateReady(evt) 
{
	modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaEventFired);
	modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaEventFired);
}

function onMediaEventFired(evt) 
{
   if(evt.type === "mediaStop" || evt.type === "mediaComplete") 
   {
	   ADTECH.close();
	   hideOverlay();
   }
}

(function($, window, undefined){
	$('.btnClose').click(function(){
		ADTECH.close();
		hideOverlay();
	});
})(jQuery, window);

