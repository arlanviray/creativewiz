/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
function onTemplateLoaded(e){player=brightcove.api.getExperience(e),modVP=player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER)}function onTemplateReady(e){modVP.addEventListener(brightcove.api.events.MediaEvent.STOP,onMediaEventFired),modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,onMediaEventFired)}function onMediaEventFired(e){("mediaStop"===e.type||"mediaComplete"===e.type)&&(ADTECH.close(),hideOverlay())}var onTemplateLoaded,onTemplateReady,player,modVP,modExp,modCon;!function(e,o,d){e(".btnClose").click(function(){ADTECH.close(),hideOverlay()})}(jQuery,window);